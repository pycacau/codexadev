from __future__ import annotations

from typing import Generic, List, Optional, TypeVar
from uuid import UUID

from .models import BaseModel
from .repository import InMemoryRepository

T = TypeVar("T", bound=BaseModel)


class CRUDService(Generic[T]):
    """
    Serviço genérico com operações básicas de CRUD.
    """

    def __init__(self, repository: InMemoryRepository[T]) -> None:
        self.repository = repository

    def create(self, item: T) -> T:
        return self.repository.add(item)

    def bulk_create(self, items: List[T]) -> List[T]:
        return self.repository.add_many(items)

    def get(self, model_cls: type[T], item_id: UUID) -> Optional[T]:
        return self.repository.get(model_cls, item_id)

    def list(self, model_cls: type[T]) -> List[T]:
        return self.repository.list(model_cls)

    def update(self, item: T) -> T:
        return self.repository.update(item)

    def delete(self, model_cls: type[T], item_id: UUID) -> None:
        self.repository.delete(model_cls, item_id)

