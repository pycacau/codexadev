from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
from uuid import UUID, uuid4


@dataclass(slots=True)
class BaseModel:
    """
    Modelo base com identificador único e metadados de auditoria.
    """

    id: UUID = field(default_factory=uuid4)
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)

    def touch(self) -> None:
        self.updated_at = datetime.utcnow()


@dataclass(slots=True)
class AuditInfo:
    created_by: str
    updated_by: str


@dataclass(slots=True)
class Address:
    street: str
    city: str
    state: str
    country: str
    zip_code: str


@dataclass(slots=True)
class ContactInfo:
    email: str
    phone: Optional[str] = None


@dataclass(slots=True)
class MonetaryAmount:
    currency: str
    value: float

    def __add__(self, other: "MonetaryAmount") -> "MonetaryAmount":
        if self.currency != other.currency:
            raise ValueError("Moedas incompatíveis.")
        return MonetaryAmount(currency=self.currency, value=self.value + other.value)

    def __sub__(self, other: "MonetaryAmount") -> "MonetaryAmount":
        if self.currency != other.currency:
            raise ValueError("Moedas incompatíveis.")
        return MonetaryAmount(currency=self.currency, value=self.value - other.value)


@dataclass(slots=True)
class Entity(BaseModel):
    name: str
    address: Optional[Address] = None
    contact: Optional[ContactInfo] = None
    audit: Optional[AuditInfo] = None

