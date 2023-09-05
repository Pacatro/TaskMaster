from pydantic import BaseModel
from database.conn_db import conn
from .user import User

class Task(BaseModel):
    id: int
    title: str
    description: str
    
def get_tasks(user_id: str):
    cursor = conn.cursor()
    
    query = "SELECT * FROM tasks WHERE user_id = %s"
    
    cursor.execute(query, (user_id))
    
    result = cursor.fetchall()
    
    task_list = []
    
    for task in result:
        task_list.append(Task(id=task[0],
                              title=task[1],
                              description=task[2]))
        
    return task_list