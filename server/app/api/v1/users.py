from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_users():
    return [{"id": 1, "username": "testuser"}]

@router.post("/create")
def create_user():
    return {"message": "User created successfully"}

@router.put("/update/{user_id}")
def update_user(user_id: int):
    return {"message": f"User {user_id} updated successfully"}

@router.delete("/delete/{user_id}")
def delete_user(user_id: int):
    return {"message": f"User {user_id} deleted successfully"}
