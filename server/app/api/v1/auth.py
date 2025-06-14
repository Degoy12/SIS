from fastapi import APIRouter, Depends, HTTPException, status, Request
from pydantic import BaseModel
from typing import Optional, List
from passlib.hash import bcrypt
from jose import jwt
import sys
import os
import logging
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from database import db

SECRET_KEY = os.getenv("SECRET_KEY", "supersecret")
ALGORITHM = "HS256"

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("auth")

router = APIRouter()

class RegisterRequest(BaseModel):
    nickname: str
    birthdate: str
    email: str
    password: str
    avatar_url: Optional[str] = None
    interests: Optional[List[str]] = []

@router.post("/register")
async def register_user(data: RegisterRequest):
    logger.info(f"Регистрация пользователя: {data.email}, nickname: {data.nickname}")
    existing_email = await db.users.find_one({"email": data.email})
    if existing_email:
        logger.warning(f"Email уже существует: {data.email}")
        raise HTTPException(status_code=400, detail="Пользователь с таким email уже существует")
    existing_nick = await db.users.find_one({"nickname": data.nickname})
    if existing_nick:
        logger.warning(f"Nickname уже существует: {data.nickname}")
        raise HTTPException(status_code=400, detail="Пользователь с таким Nickname уже существует")
    hashed_password = bcrypt.hash(data.password)
    user = {
        "nickname": data.nickname,
        "birthdate": data.birthdate,
        "email": data.email,
        "password": hashed_password,
        "avatar_url": data.avatar_url,
        "interests": data.interests or [],
        "email_verified": False
    }
    result = await db.users.insert_one(user)
    user_id = str(result.inserted_id)
    logger.info(f"Пользователь успешно зарегистрирован: {user_id}")
    token = jwt.encode({"user_id": user_id, "nickname": data.nickname, "email": data.email}, SECRET_KEY, algorithm=ALGORITHM)
    logger.info(f"JWT выдан для пользователя: {data.email}")
    return {"message": "User registered successfully", "nickname": data.nickname, "token": token}

@router.post("/login")
def login_user():
    logger.info("Вход пользователя")
    return {"message": "User logged in successfully"}

@router.post("/logout")
def logout_user():
    return {"message": "User logged out successfully"}

@router.post("/refresh-token")
def refresh_token():
    return {"message": "Token refreshed successfully"}
