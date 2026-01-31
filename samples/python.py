from dataclasses import dataclass
from typing import Optional
import asyncio

@dataclass
class User:
    """Represents a user in the system."""
    name: str
    email: str
    age: int = 0
    active: bool = True

class AuthService:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self._cache: dict[str, User] = {}

    async def authenticate(self, user_id: str) -> Optional[User]:
        if user_id in self._cache:
            return self._cache[user_id]

        # Fetch from API
        user = await self._fetch_user(user_id)
        if user and user.active:
            self._cache[user_id] = user
        return user

    async def _fetch_user(self, user_id: str) -> Optional[User]:
        await asyncio.sleep(0.1)  # Simulate network delay
        return User(name="Alice", email=f"{user_id}@example.com", age=30)

# Usage
async def main():
    service = AuthService(api_key="sk-1234567890")
    user = await service.authenticate("user_42")
    print(f"Authenticated: {user.name if user else 'None'}")

if __name__ == "__main__":
    asyncio.run(main())
