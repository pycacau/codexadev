from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from typing import List
from uuid import UUID

from .core import BaseModel, CRUDService, InMemoryRepository, MonetaryAmount


@dataclass(slots=True)
class Supplier(BaseModel):
    document: str


@dataclass(slots=True)
class PurchaseOrderItem:
    product_id: UUID
    quantity: int
    unit_cost: MonetaryAmount

    @property
    def total(self) -> MonetaryAmount:
        return MonetaryAmount(self.unit_cost.currency, self.quantity * self.unit_cost.value)


@dataclass(slots=True)
class PurchaseOrder(BaseModel):
    supplier_id: UUID
    status: str
    items: List[PurchaseOrderItem] = field(default_factory=list)
    expected_date: datetime = field(default_factory=datetime.utcnow)

    @property
    def total(self) -> MonetaryAmount:
        if not self.items:
            return MonetaryAmount("BRL", 0)
        currency = self.items[0].unit_cost.currency
        value = sum(item.total.value for item in self.items)
        return MonetaryAmount(currency, value)


class PurchasingService(CRUDService[BaseModel]):
    def __init__(self, repository: InMemoryRepository[BaseModel]) -> None:
        super().__init__(repository)

    def register_supplier(self, supplier: Supplier) -> Supplier:
        return self.create(supplier)

    def place_order(self, order: PurchaseOrder) -> PurchaseOrder:
        return self.create(order)

    def list_orders(self) -> List[PurchaseOrder]:
        return self.list(PurchaseOrder)

    def committed_spend(self) -> MonetaryAmount:
        orders = self.list_orders()
        if not orders:
            return MonetaryAmount("BRL", 0)
        currency = orders[0].total.currency
        total_value = sum(order.total.value for order in orders)
        return MonetaryAmount(currency, total_value)


def bootstrap_purchasing_service() -> PurchasingService:
    repo: InMemoryRepository[BaseModel] = InMemoryRepository()
    return PurchasingService(repo)

