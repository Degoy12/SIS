from fastapi import APIRouter, Depends

router = APIRouter()

@router.post("/create")
def create_post():
    return {"message": "Post created successfully"}

@router.get("/list")
def list_posts():
    return {"message": "List of posts"}

@router.put("/edit/{post_id}")
def edit_post(post_id: int):
    return {"message": f"Post {post_id} edited successfully"}

@router.delete("/delete/{post_id}")
def delete_post(post_id: int):
    return {"message": f"Post {post_id} deleted successfully"}
