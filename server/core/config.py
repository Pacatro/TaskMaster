import os
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    db_host: str
    db_user: str
    db_password: str
    db_name: str
    db_port: int
    secret: str
    algorithm: str
    jwt_expires_min: int
    frontend_url: str
    model_config = SettingsConfigDict(env_file=os.path.join(os.getcwd(), "..", ".env"))
    
settings = Settings()

# @lru_cache
# def get_settings():
#     return Settings()