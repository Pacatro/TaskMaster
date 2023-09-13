from datetime import datetime, timedelta
from jose import jwt
from models.token import Token
from dotenv import load_dotenv
import os

load_dotenv()

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
        
        access_token = jwt.encode(to_encode, SECRET, algorithm=ALGORITHM)
        
        return Token(access_token=access_token, token_type="bearer")
