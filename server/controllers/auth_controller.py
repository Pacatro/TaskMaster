from fastapi import HTTPException, status, Depends
from controllers.user_controler import UserController
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from models.user import User
import os

ALGORITHM = os.getenv("ALGORITHM")
SECRET = os.getenv("SECRET")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

class AuthController:
    @staticmethod
    async def auth_user(token: str = Depends(oauth2_scheme)):
        exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, 
                                    detail="Could not validate credentials", 
                                    headers={"WWW-Authenticate": "Bearer"})
        
        try:
            payload = jwt.decode(token, SECRET, algorithms=[ALGORITHM])
            username: str = payload.get("sub")
            
            if not username:
                raise exception
            
        except JWTError:
            raise exception
        
        return UserController.search_user(username)
    
    @staticmethod
    async def current_user(user: User = Depends(auth_user)):
        return await user