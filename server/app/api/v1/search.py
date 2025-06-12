from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/users")
def search_users():
    return {"message": "Search results for users"}

@router.get("/posts")
def search_posts():
    return {"message": "Search results for posts"}
