import jwt
from datetime import datetime, timedelta, timezone

from models.token import Token
from core import settings

class TokenController:
    @staticmethod
    def get_token(data: dict):
        to_encode = data.copy()
        access_token_expires = timedelta(minutes=settings.jwt_expires_min)
        expire = datetime.now(timezone.utc) + access_token_expires
        to_encode.update({"exp": expire})
        access_token = jwt.encode(to_encode, settings.secret, algorithm=settings.algorithm)
        return Token(access_token=access_token, token_type="Bearer")
