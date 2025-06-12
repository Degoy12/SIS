from fastapi import APIRouter, Depends

router = APIRouter()

@router.put("/update")
def update_settings():
    return {"message": "Settings updated successfully"}

@router.get("/notifications")
def get_notifications():
    return {"message": "Notification settings"}
