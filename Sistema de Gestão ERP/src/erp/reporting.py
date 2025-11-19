from __future__ import annotations

from typing import Dict, Iterable

from .analytics import AnalyticsService
from .inventory import InventoryService


class ReportingService:
    def __init__(self, inventory: InventoryService, analytics: AnalyticsService) -> None:
        self.inventory = inventory
        self.analytics = analytics

    def inventory_report(self) -> Iterable[str]:
        snapshot = self.inventory.get_inventory()
        for product_id, data in snapshot.items():
            yield f"Produto {product_id} - Qtde: {data.quantity} - Valor: {data.total_cost.value:.2f} {data.total_cost.currency}"

    def kpi_report(self) -> Dict[str, str]:
        gross_margin = self.analytics.gross_margin()
        ratio = self.analytics.purchasing_vs_sales_ratio()
        balance = self.analytics.finance_balance()
        return {
            "Margem Bruta": f"{gross_margin.value:.2f} {gross_margin.currency}",
            "Compras vs Vendas": f"{ratio:.1f}%",
            "Saldo Financeiro": f"{balance.value:.2f} {balance.currency}",
        }

