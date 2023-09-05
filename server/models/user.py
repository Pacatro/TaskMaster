from pydantic import BaseModel
from database.conn_db import conn
from uuid import UUID

class User(BaseModel):
    id: UUID
    username: str
    name: str
    surname: str
    email: str
    
class UserDB(User):
    password: str  

def search_user(username: str):
    cursor = conn.cursor()
    
    query = "SELECT * FROM users WHERE username = %s"
    cursor.execute(query, (username))
    
    result = cursor.fetchone()
    
    if not result:
        return None
    
    user = User(id=result[0], 
                username=result[1], 
                name=result[2], 
                surname=result[3], 
                email=result[4])
    
    return user
    
    
def search_user_db(username: str):
    cursor = conn.cursor()
    
    query = "SELECT * FROM users WHERE username = %s"
    cursor.execute(query, (username))
    
    result = cursor.fetchone()
    
    user = UserDB(id=result[0], 
                username=result[1], 
                name=result[2], 
                surname=result[3], 
                email=result[4],
                password=result[5])
    
    return user

def insert_user_db(data: dict):
    user = UserDB(**data)
    cursor = conn.cursor()
    
    query = "INSERT INTO users (id, username, name, surname, email, password) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(query, (user.id, user.username, user.name, user.surname, user.email, user.password))
    
    conn.commit()
    
    return user
    