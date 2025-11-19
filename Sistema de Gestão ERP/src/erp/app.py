from __future__ import annotations

from dataclasses import dataclass

from .analytics import AnalyticsService
from .finance import FinanceService, bootstrap_finance_service
from .hr import HRService, bootstrap_hr_service
from .inventory import InventoryService, bootstrap_inventory_service
from .purchasing import PurchasingService, bootstrap_purchasing_service
from .reporting import ReportingService
from .sales import SalesService, bootstrap_sales_service


@dataclass(slots=True)
class ERPSystem:
    inventory: InventoryService
    sales: SalesService
    purchasing: PurchasingService
    finance: FinanceService
    hr: HRService
    analytics: AnalyticsService
    reporting: ReportingService

    @classmethod
    def bootstrap(cls) -> "ERPSystem":
        inventory = bootstrap_inventory_service()
        sales = bootstrap_sales_service()
        purchasing = bootstrap_purchasing_service()
        finance = bootstrap_finance_service()
        hr = bootstrap_hr_service()
        analytics = AnalyticsService(
            inventory=inventory,
            sales=sales,
            purchasing=purchasing,
            finance=finance,
        )
        reporting = ReportingService(inventory=inventory, analytics=analytics)
        return cls(
            inventory=inventory,
            sales=sales,
            purchasing=purchasing,
            finance=finance,
            hr=hr,
            analytics=analytics,
            reporting=reporting,
        )

