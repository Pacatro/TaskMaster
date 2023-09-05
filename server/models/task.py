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

def insert_task(user_id: str, task_data: dict):
    cursor = conn.cursor()
    
    query = "INSERT INTO tasks (title, description, user_id) VALUES (%s, %s, %s)"
    
    try:
        cursor.execute(query, (task_data['title'], task_data['description'], user_id))
        conn.commit()
    except Exception:
        print(Exception)
        return False
    
    return True

    
def update_task(task_id: int, new_task_data: dict):
    cursor = conn.cursor()
    
    query = "UPDATE tasks SET title = %s, description = %s WHERE id = %s"
    
    try:
        cursor.execute(query, (new_task_data['title'], new_task_data['description'], task_id))
        conn.commit()
    except:
        return False
    
    return True


def delete_task(task_id: int):
    cursor = conn.cursor()
    
    query = "DELETE FROM tasks WHERE id = %s"
    
    try:
        cursor.execute(query, (task_id))
        conn.commit()
    except Exception as e:
        print(e)
        return False
    
    return True