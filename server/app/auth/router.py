from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register_user():
    return {"message": "User registered successfully"}

@router.post("/login")
def login_user():
    return {"message": "User logged in successfully"}

@router.post("/logout")
def logout_user():
    return {"message": "User logged out successfully"}

@router.post("/refresh-token")
def refresh_token():
    return {"message": "Token refreshed successfully"}