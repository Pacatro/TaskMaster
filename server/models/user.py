from pydantic import BaseModel
from uuid import UUID

class User(BaseModel):
    id: UUID
    username: str
    name: str
    surname: str
    email: str
    
class UserDB(User):
    password: str  