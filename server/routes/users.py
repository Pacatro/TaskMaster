from fastapi import APIRouter, HTTPException, status, Depends
from .auth import User, current_user
from models.task import get_tasks

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me")
async def get_me(user: User = Depends(current_user)):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    
    return user
