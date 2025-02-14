from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.models import ScenographyBase
import logging

# Configuration des logs
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

stored_scenography = None

@app.get("/api/scenography")
async def get_scenography():
    logger.info("GET /api/scenography called")
    if stored_scenography is None:
        return {
            "scenes": [{"name": "Default Scene", "duration": 30}],
            "transitions": []
        }
    return stored_scenography

@app.post("/api/scenography")
async def save_scenography(scenography: ScenographyBase):
    logger.info("POST /api/scenography called with data: %s", scenography)
    global stored_scenography
    stored_scenography = scenography.dict()
    return stored_scenography 