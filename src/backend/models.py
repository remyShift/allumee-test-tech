from pydantic import BaseModel
from typing import List

class SceneBase(BaseModel):
    name: str
    duration: int

class TransitionBase(BaseModel):
    name: str
    duration: int

class ScenographyBase(BaseModel):
    scenes: List[SceneBase]
    transitions: List[TransitionBase] 