from fastapi import FastAPI
import uvicorn
from models.user import search_user_db

app = FastAPI()

@app.get("/")
async def root():
    return search_user_db("admin")

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)