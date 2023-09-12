from fastapi import APIRouter, HTTPException, status
from controllers.task_controller import TaskController

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/{user_id}")
async def tasks(user_id: str):
    return TaskController.get_user_tasks(user_id)


@router.get("/task/{task_id}")
async def task(task_id: int):
    return TaskController.get_task(task_id)


@router.post("/{user_id}", status_code=status.HTTP_201_CREATED)
async def tasks(user_id: str, task_data: dict):
    if not TaskController.insert_task(user_id, task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't insert new task")
    return {"message": "Task created"}


@router.put("/{task_id}")
async def tasks(task_id: int, new_task_data: dict):
    if not TaskController.update_task(task_id, new_task_data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't update new task")
    return {"message": "Task updated"}



@router.delete("/{task_id}")
async def tasks(task_id: int):
    if not TaskController.delete_task(task_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Can't remove new task")
    return {"message": "Task deleted"}
