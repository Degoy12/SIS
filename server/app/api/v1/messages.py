from fastapi import APIRouter, Depends

router = APIRouter()

@router.post("/send")
def send_message():
    return {"message": "Message sent successfully"}

@router.get("/list")
def list_messages():
    return {"message": "List of messages"}

@router.delete("/delete/{message_id}")
def delete_message(message_id: int):
    return {"message": f"Message {message_id} deleted successfully"}
