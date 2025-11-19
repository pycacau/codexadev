from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import Dict, List

from .core import BaseModel, CRUDService, InMemoryRepository, MonetaryAmount


@dataclass(slots=True)
class Product(BaseModel):
    sku: str
    name: str
    unit_cost: MonetaryAmount


@dataclass(slots=True)
class StockMovement(BaseModel):
    product_id: str
    quantity: int
    reason: str
    direction: str  # entrada ou saída


@dataclass(slots=True)
class InventorySnapshot(BaseModel):
    product_id: str
    quantity: int
    total_cost: MonetaryAmount
    last_updated: datetime


class InventoryService(CRUDService[BaseModel]):
    def __init__(self, repository: InMemoryRepository[BaseModel]) -> None:
        super().__init__(repository)

    def register_product(self, product: Product) -> Product:
        return self.create(product)

    def record_movement(self, movement: StockMovement) -> StockMovement:
        direction = movement.direction.lower()
        if direction not in {"entrada", "saida"}:
            raise ValueError("Direção deve ser 'entrada' ou 'saida'.")
        sign = 1 if direction == "entrada" else -1
        movement.quantity = movement.quantity * sign
        return self.create(movement)

    def get_inventory(self) -> Dict[str, InventorySnapshot]:
        movements = self.list(StockMovement)
        products = {p.id: p for p in self.list(Product)}
        summary: Dict[str, InventorySnapshot] = {}
        for move in movements:
            product = products.get(move.product_id)
            if not product:
                continue
            snapshot = summary.setdefault(
                move.product_id,
                InventorySnapshot(
                    product_id=move.product_id,
                    quantity=0,
                    total_cost=MonetaryAmount(product.unit_cost.currency, 0),
                    last_updated=move.updated_at,
                ),
            )
            snapshot.quantity += move.quantity
            snapshot.total_cost = MonetaryAmount(
                snapshot.total_cost.currency,
                snapshot.total_cost.value + move.quantity * product.unit_cost.value,
            )
            snapshot.last_updated = move.updated_at
        return summary

    def valuate_inventory(self) -> MonetaryAmount:
        inventory = self.get_inventory()
        total = sum(snapshot.total_cost.value for snapshot in inventory.values())
        currency = next(iter(inventory.values())).total_cost.currency if inventory else "BRL"
        return MonetaryAmount(currency=currency, value=total)


def bootstrap_inventory_service() -> InventoryService:
    repo: InMemoryRepository[BaseModel] = InMemoryRepository()
    return InventoryService(repo)

