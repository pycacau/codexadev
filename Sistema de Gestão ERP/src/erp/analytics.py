from __future__ import annotations

from dataclasses import dataclass

from .core import MonetaryAmount
from .finance import FinanceService
from .inventory import InventoryService
from .purchasing import PurchasingService
from .sales import SalesService


@dataclass(slots=True)
class MetricResult:
    name: str
    value: float
    currency: str


class AnalyticsService:
    def __init__(
        self,
        inventory: InventoryService,
        sales: SalesService,
        purchasing: PurchasingService,
        finance: FinanceService,
    ) -> None:
        self.inventory = inventory
        self.sales = sales
        self.purchasing = purchasing
        self.finance = finance

    def gross_margin(self) -> MonetaryAmount:
        revenue = self.sales.revenue_total()
        inventory_value = self.inventory.valuate_inventory()
        currency = revenue.currency or inventory_value.currency
        margin = revenue.value - inventory_value.value
        return MonetaryAmount(currency, margin)

    def purchasing_vs_sales_ratio(self) -> float:
        sales_total = self.sales.revenue_total().value
        purchasing_total = self.purchasing.committed_spend().value
        if sales_total == 0:
            return 0.0
        return (purchasing_total / sales_total) * 100

    def finance_balance(self) -> MonetaryAmount:
        return self.finance.cash_flow()

