from jose import jwt
from datetime import datetime, timedelta
import os

SECRET = os.getenv("SECRET")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

class TokenController:
    @staticmethod
    def get_token(data: dict):
        to_encode = data.copy()
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        
        expire = datetime.utcnow() + access_token_expires
            
        to_encode.update({"exp": expire})
        
        return jwt.encode(to_encode, SECRET, algorithm=ALGORITHM)
