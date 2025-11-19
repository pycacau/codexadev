from __future__ import annotations

from collections import defaultdict
from typing import Dict, Generic, Iterable, List, Optional, TypeVar
from uuid import UUID

from .models import BaseModel

T = TypeVar("T", bound=BaseModel)


class InMemoryRepository(Generic[T]):
    """
    Repositório em memória segmentado por tipo de entidade.
    """

    def __init__(self) -> None:
        self._storage: Dict[type[T], Dict[UUID, T]] = defaultdict(dict)

    def add(self, item: T) -> T:
        self._storage[type(item)][item.id] = item
        return item

    def add_many(self, items: Iterable[T]) -> List[T]:
        return [self.add(item) for item in items]

    def get(self, model_cls: type[T], item_id: UUID) -> Optional[T]:
        return self._storage[model_cls].get(item_id)

    def list(self, model_cls: type[T]) -> List[T]:
        return list(self._storage[model_cls].values())

    def update(self, item: T) -> T:
        if item.id not in self._storage[type(item)]:
            raise KeyError(f"Entidade {item.id} não encontrada")
        item.touch()
        self._storage[type(item)][item.id] = item
        return item

    def delete(self, model_cls: type[T], item_id: UUID) -> None:
        self._storage[model_cls].pop(item_id, None)

