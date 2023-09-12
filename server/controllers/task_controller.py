from models.task import Task
from database.conn_db import conn
import pymysql

class TaskController:
    @staticmethod
    def get_task(task_id: int):
        cursor = conn.cursor()
        
        query = "SELECT * FROM tasks WHERE id = %s"
        
        cursor.execute(query, (task_id))
        
        task = cursor.fetchone()
        
        return Task(id=task[0], title=task[1], description=task[2])


    @staticmethod
    def get_user_tasks(user_id: str):
        cursor = conn.cursor()
        
        query = "SELECT * FROM tasks WHERE user_id = %s"
        
        cursor.execute(query, (user_id))
        
        result = cursor.fetchall()
        
        tasks_list = []
        
        for task in result:
            tasks_list.append(Task(id=task[0],
                                title=task[1],
                                description=task[2]))
            
        return tasks_list


    @staticmethod
    def insert_task(user_id: str, task_data: dict):
        if len(task_data) < 2:
            return False
        
        cursor = conn.cursor()
        
        query = "INSERT INTO tasks (title, description, user_id) VALUES (%s, %s, %s)"
        
        try:
            cursor.execute(query, (task_data['title'], task_data['description'], user_id))
        except pymysql.Error as e:
            raise e
        
        conn.commit()
        return True

        
    @staticmethod
    def update_task(task_id: int, new_task_data: dict):
        if len(new_task_data) < 2:
            return False
        
        cursor = conn.cursor()
        
        query = "UPDATE tasks SET title = %s, description = %s WHERE id = %s"
        
        try:
            cursor.execute(query, (new_task_data['title'], new_task_data['description'], task_id))
        except pymysql.Error as e:
            raise e
        
        conn.commit()
        return True


    @staticmethod
    def delete_task(task_id: int):
        cursor = conn.cursor()
        
        query = "DELETE FROM tasks WHERE id = %s"
        
        try:
            cursor.execute(query, (task_id))
        except pymysql.Error as e:
            raise e
        
        conn.commit()
        return True