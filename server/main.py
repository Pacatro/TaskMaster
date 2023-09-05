from fastapi import FastAPI
import uvicorn
from models.user import search_user_db
from models.task import get_tasks
from routes import auth, users, tasks

app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(tasks.router)

@app.get("/")
async def root():
    user = search_user_db("admin")
    return get_tasks(user.id)
    

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)