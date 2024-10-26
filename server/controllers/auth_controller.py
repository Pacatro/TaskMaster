import jwt
from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import PyJWKError

from models.user import User
from controllers.user_controler import UserController
from core import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

class AuthController:
    @staticmethod
    async def auth_user(token: str = Depends(oauth2_scheme)):
        exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, 
                                    detail="Could not validate credentials", 
                                    headers={"WWW-Authenticate": "Bearer"})
        
        try:
            payload = jwt.decode(token, settings.secret, algorithms=[settings.algorithm])
            username: str = payload.get("sub")
            if not username:
                raise exception
        except PyJWKError:
            raise exception
        
        return UserController.search_user(username)
    
    @staticmethod
    async def current_user(user: User = Depends(auth_user)):
        return await user