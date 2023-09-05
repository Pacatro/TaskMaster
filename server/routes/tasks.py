from fastapi import APIRouter, HTTPException, status, Depends
from models.task import get_tasks

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/{user_id}")
async def tasks(user_id: str):
    return get_tasks(user_id)


#INSERTAR NUEVAS TAREAS DEL USUARIO SELECCIONADO
@router.post("/{user_id}")
async def tasks(user_id: str, task_data: dict):
    pass


#EDITAR TAREAS DEL USUARIO SELECCIONADO
@router.put("/{user_id}")
async def tasks(user_id: str, new_task_data: dict):
    pass


#INSERTAR NUEVAS TAREAS AL USUARIO SELECCIONADO
@router.delete("/{user_id}")
async def tasks(user_id: str, task_id: str):
    pass