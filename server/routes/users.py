from fastapi import APIRouter, HTTPException, status, Depends
from controllers.auth_controller import AuthController
from models.user import User

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me")
async def get_me(user: User = Depends(AuthController.current_user)):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    
    return user
