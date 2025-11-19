from __future__ import annotations

from dataclasses import dataclass
from datetime import date
from typing import List

from .core import BaseModel, CRUDService, InMemoryRepository, MonetaryAmount


@dataclass(slots=True)
class Employee(BaseModel):
    name: str
    document: str
    hire_date: date
    position: str
    salary: MonetaryAmount


@dataclass(slots=True)
class PayrollEntry(BaseModel):
    employee_id: str
    competence: str  # YYYY-MM
    gross: MonetaryAmount
    net: MonetaryAmount


class HRService(CRUDService[BaseModel]):
    def __init__(self, repository: InMemoryRepository[BaseModel]) -> None:
        super().__init__(repository)

    def onboard_employee(self, employee: Employee) -> Employee:
        return self.create(employee)

    def register_payroll(self, payroll: PayrollEntry) -> PayrollEntry:
        return self.create(payroll)

    def list_payroll(self) -> List[PayrollEntry]:
        return self.list(PayrollEntry)

    def monthly_payroll_total(self, competence: str) -> MonetaryAmount:
        entries = [p for p in self.list_payroll() if p.competence == competence]
        if not entries:
            return MonetaryAmount("BRL", 0)
        currency = entries[0].net.currency
        total = sum(entry.net.value for entry in entries)
        return MonetaryAmount(currency, total)


def bootstrap_hr_service() -> HRService:
    repo: InMemoryRepository[BaseModel] = InMemoryRepository()
    return HRService(repo)

