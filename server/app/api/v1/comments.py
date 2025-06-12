from fastapi import APIRouter, Depends

router = APIRouter()

@router.post("/add")
def add_comment():
    return {"message": "Comment added successfully"}

@router.get("/list/{post_id}")
def list_comments(post_id: int):
    return {"message": f"Comments for post {post_id}"}

@router.delete("/delete/{comment_id}")
def delete_comment(comment_id: int):
    return {"message": f"Comment {comment_id} deleted successfully"}
