from fastapi import APIRouter, HTTPException, status
from controllers.token_controller import TokenController
from controllers.user_controler import UserController
from passlib.context import CryptContext
from models.token import Token
import uuid

router = APIRouter()

crypt = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/signup")
async def signup(form_data: dict):
    
    user = UserController.search_user(form_data["username"])
    
    if user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="User already exists")
    
    form_data.update({"id": uuid.uuid4()})
    form_data.update({"password": crypt.hash(form_data["password"])})
    
    user = UserController.insert_user_db(form_data)
    
    access_token = TokenController.get_token(data={"sub": user.username})
    
    return Token(access_token=access_token, token_type="bearer")


@router.post("/login")
async def login(form_data: dict):
    username = form_data["username"]
    password = form_data["password"]
    
    user = UserController.search_user_db(username)
    
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    if not crypt.verify(password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect password")
        
    access_token = TokenController.get_token(data={"sub": user.username})
    
    return Token(access_token=access_token, token_type="bearer")
    