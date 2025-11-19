"""
Componentes genéricos compartilhados entre os módulos do ERP.
"""

from .models import (
    BaseModel,
    Entity,
    AuditInfo,
    MonetaryAmount,
    Address,
    ContactInfo,
)
from .repository import InMemoryRepository
from .services import CRUDService

__all__ = [
    "Address",
    "AuditInfo",
    "BaseModel",
    "ContactInfo",
    "CRUDService",
    "Entity",
    "InMemoryRepository",
    "MonetaryAmount",
]

