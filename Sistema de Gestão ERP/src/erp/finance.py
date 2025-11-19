from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import List

from .core import BaseModel, CRUDService, InMemoryRepository, MonetaryAmount


@dataclass(slots=True)
class LedgerEntry(BaseModel):
    account: str
    description: str
    amount: MonetaryAmount
    entry_type: str  # debit ou credit
    reference_id: str | None = None
    competence: datetime = datetime.utcnow()


class FinanceService(CRUDService[BaseModel]):
    def __init__(self, repository: InMemoryRepository[BaseModel]) -> None:
        super().__init__(repository)

    def record_entry(self, entry: LedgerEntry) -> LedgerEntry:
        if entry.entry_type not in {"debit", "credit"}:
            raise ValueError("Tipo precisa ser 'debit' ou 'credit'.")
        return self.create(entry)

    def list_entries(self) -> List[LedgerEntry]:
        return self.list(LedgerEntry)

    def cash_flow(self) -> MonetaryAmount:
        entries = self.list_entries()
        if not entries:
            return MonetaryAmount("BRL", 0)
        currency = entries[0].amount.currency
        value = 0.0
        for entry in entries:
            value += entry.amount.value if entry.entry_type == "credit" else -entry.amount.value
        return MonetaryAmount(currency, value)


def bootstrap_finance_service() -> FinanceService:
    repo: InMemoryRepository[BaseModel] = InMemoryRepository()
    return FinanceService(repo)

