from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from typing import List
from uuid import UUID

from .core import BaseModel, CRUDService, InMemoryRepository, MonetaryAmount


@dataclass(slots=True)
class Customer(BaseModel):
    name: str
    document: str


@dataclass(slots=True)
class SalesOrderItem:
    product_id: UUID
    quantity: int
    unit_price: MonetaryAmount

    @property
    def total(self) -> MonetaryAmount:
        return MonetaryAmount(self.unit_price.currency, self.quantity * self.unit_price.value)


@dataclass(slots=True)
class SalesOrder(BaseModel):
    customer_id: UUID
    status: str
    items: List[SalesOrderItem] = field(default_factory=list)
    issued_at: datetime = field(default_factory=datetime.utcnow)

    @property
    def total(self) -> MonetaryAmount:
        if not self.items:
            return MonetaryAmount(currency="BRL", value=0)
        currency = self.items[0].unit_price.currency
        value = sum(item.total.value for item in self.items)
        return MonetaryAmount(currency=currency, value=value)


class SalesService(CRUDService[BaseModel]):
    def __init__(self, repository: InMemoryRepository[BaseModel]) -> None:
        super().__init__(repository)

    def register_customer(self, customer: Customer) -> Customer:
        return self.create(customer)

    def new_order(self, order: SalesOrder) -> SalesOrder:
        return self.create(order)

    def list_orders(self) -> List[SalesOrder]:
        return self.list(SalesOrder)

    def revenue_total(self) -> MonetaryAmount:
        orders = self.list_orders()
        if not orders:
            return MonetaryAmount("BRL", 0)
        currency = orders[0].total.currency
        total_value = sum(order.total.value for order in orders)
        return MonetaryAmount(currency, total_value)


def bootstrap_sales_service() -> SalesService:
    repo: InMemoryRepository[BaseModel] = InMemoryRepository()
    return SalesService(repo)

