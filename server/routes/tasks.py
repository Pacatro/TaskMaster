from fastapi import APIRouter, HTTPException, status
from models.task import *

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/{user_id}")
async def tasks(user_id: str):
    return get_tasks(user_id)


@router.post("/{user_id}", status_code=status.HTTP_201_CREATED)
async def tasks(user_id: str, task_data: dict):
    if not insert_task(user_id, task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't insert new task")
    return {"message": "Task created"}


@router.put("/{task_id}")
async def tasks(task_id: int, new_task_data: dict):
    if not update_task(task_id, new_task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't update new task")
    return {"message": "Task updated"}



@router.delete("/{task_id}")
async def tasks(task_id: int):
    if not delete_task(task_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't remove new task")
    return {"message": "Task deleted"}

@router.get("/task/{task_id}")
async def task(task_id: int):
    return get_task(task_id)