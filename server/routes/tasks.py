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
@router.put("/{task_id}")
async def tasks(task_id: int, new_task_data: dict):
    pass


#ELIMINAR TAREA SELECCIONADA
@router.delete("/{task_id}")
async def tasks(task_id: int):
    pass