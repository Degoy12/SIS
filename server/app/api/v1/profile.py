from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/info")
def get_profile():
    return {"message": "Profile information"}

@router.put("/update")
def update_profile():
    return {"message": "Profile updated successfully"}

@router.post("/upload-avatar")
def upload_avatar():
    return {"message": "Avatar uploaded successfully"}
