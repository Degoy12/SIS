from fastapi import APIRouter, Depends, Query, HTTPException
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from database import db
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("profile")

router = APIRouter()

@router.get("/info")
async def get_profile(email: str = Query(...)):
    logger.info(f"Запрос профиля для email: {email}")
    user = await db.users.find_one({"email": email})
    if not user:
        logger.warning(f"Профиль не найден для email: {email}")
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    user["_id"] = str(user["_id"])
    logger.info(f"Профиль успешно найден для email: {email}")
    return user

@router.put("/update")
def update_profile():
    return {"message": "Profile updated successfully"}

@router.post("/upload-avatar")
def upload_avatar():
    return {"message": "Avatar uploaded successfully"}
