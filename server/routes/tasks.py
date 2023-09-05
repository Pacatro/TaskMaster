from fastapi import APIRouter, HTTPException, status, Depends
from models.task import get_tasks, insert_task, update_task, delete_task

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/{user_id}")
async def tasks(user_id: str):
    return get_tasks(user_id)

#ARREGLAR RESPUESTAS
@router.post("/{user_id}", status_code=status.HTTP_201_CREATED)
async def tasks(user_id: str, task_data: dict):
    if not insert_task(user_id, task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return {"message": "Task created"}

#ARREGLAR RESPUESTAS
@router.put("/{task_id}")
async def tasks(task_id: int, new_task_data: dict):
    if not update_task(task_id, new_task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return {"message": "Task updated"}


#ARREGLAR RESPUESTAS
@router.delete("/{task_id}")
async def tasks(task_id: int):
    if not delete_task(task_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return {"message": "Task deleted"}