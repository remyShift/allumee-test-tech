from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import ScenographyBase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

stored_scenography = None

@app.get("/api/scenography")
async def get_scenography():
    if stored_scenography is None:
        return {
            "scenes": [{"name": "Default Scene", "duration": 30}],
            "transitions": []
        }
    return stored_scenography

@app.post("/api/scenography")
async def save_scenography(scenography: ScenographyBase):
    global stored_scenography
    stored_scenography = scenography.dict()
    return stored_scenography 