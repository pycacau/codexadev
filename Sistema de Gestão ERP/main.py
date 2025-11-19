from __future__ import annotations

import sys
from datetime import date
from pathlib import Path

SRC_PATH = Path(__file__).parent / "src"
if str(SRC_PATH) not in sys.path:
    sys.path.insert(0, str(SRC_PATH))

from erp import ERPSystem
from erp.finance import LedgerEntry
from erp.hr import Employee, PayrollEntry
from erp.inventory import Product, StockMovement
from erp.purchasing import PurchaseOrder, PurchaseOrderItem, Supplier
from erp.sales import Customer, SalesOrder, SalesOrderItem
from erp.core import MonetaryAmount


def seed_demo_data(system: ERPSystem) -> None:
    product_tv = system.inventory.register_product(
        Product(
            sku="TV-001",
            name="Smart TV 55\"",
            unit_cost=MonetaryAmount("BRL", 2500.0),
        )
    )
    product_phone = system.inventory.register_product(
        Product(
            sku="PH-010",
            name="Smartphone 128GB",
            unit_cost=MonetaryAmount("BRL", 1800.0),
        )
    )

    system.inventory.record_movement(
        StockMovement(product_id=str(product_tv.id), quantity=50, reason="Compra Inicial", direction="entrada")
    )
    system.inventory.record_movement(
        StockMovement(product_id=str(product_phone.id), quantity=80, reason="Compra Inicial", direction="entrada")
    )

    customer = system.sales.register_customer(Customer(name="Loja Exemplo", document="123456789"))
    order = SalesOrder(
        customer_id=customer.id,
        status="faturado",
        items=[
            SalesOrderItem(product_id=product_tv.id, quantity=5, unit_price=MonetaryAmount("BRL", 3200.0)),
            SalesOrderItem(product_id=product_phone.id, quantity=10, unit_price=MonetaryAmount("BRL", 2500.0)),
        ],
    )
    system.sales.new_order(order)
    system.inventory.record_movement(
        StockMovement(product_id=str(product_tv.id), quantity=5, reason="Venda", direction="saida")
    )
    system.inventory.record_movement(
        StockMovement(product_id=str(product_phone.id), quantity=10, reason="Venda", direction="saida")
    )

    supplier = system.purchasing.register_supplier(Supplier(name="Fornecedor Global", document="987654321"))
    purchase_order = PurchaseOrder(
        supplier_id=supplier.id,
        status="enviado",
        items=[PurchaseOrderItem(product_id=product_tv.id, quantity=20, unit_cost=MonetaryAmount("BRL", 2300.0))],
    )
    system.purchasing.place_order(purchase_order)

    system.finance.record_entry(
        LedgerEntry(
            account="Receita",
            description="Venda TV/Smartphone",
            amount=MonetaryAmount("BRL", order.total.value),
            entry_type="credit",
        )
    )
    system.finance.record_entry(
        LedgerEntry(
            account="Estoque",
            description="Compra veículos",
            amount=MonetaryAmount("BRL", 100000.0),
            entry_type="debit",
        )
    )

    employee = system.hr.onboard_employee(
        Employee(
            name="Maria Silva",
            document="11122233344",
            hire_date=date(2020, 5, 20),
            position="Analista Financeiro",
            salary=MonetaryAmount("BRL", 6000.0),
        )
    )
    system.hr.register_payroll(
        PayrollEntry(
            employee_id=str(employee.id),
            competence="2025-11",
            gross=MonetaryAmount("BRL", 6000.0),
            net=MonetaryAmount("BRL", 4800.0),
        )
    )


def main() -> None:
    erp = ERPSystem.bootstrap()
    seed_demo_data(erp)

    print("=== Inventário ===")
    for line in erp.reporting.inventory_report():
        print(line)

    print("\n=== Indicadores ===")
    for name, value in erp.reporting.kpi_report().items():
        print(f"{name}: {value}")

    print("\n=== Folha do mês ===")
    payroll = erp.hr.monthly_payroll_total("2025-11")
    print(f"Total folha 11/2025: {payroll.value:.2f} {payroll.currency}")


if __name__ == "__main__":
    main()

