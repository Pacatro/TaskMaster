import uvicorn
from fastapi import FastAPI
from routes import auth, users, tasks

app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(tasks.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)