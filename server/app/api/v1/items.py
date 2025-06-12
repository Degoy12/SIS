from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_items():
    return [{"id": 1, "name": "Sample Item"}]

@router.post("/create")
def create_item():
    return {"message": "Item created successfully"}

@router.put("/update/{item_id}")
def update_item(item_id: int):
    return {"message": f"Item {item_id} updated successfully"}

@router.delete("/delete/{item_id}")
def delete_item(item_id: int):
    return {"message": f"Item {item_id} deleted successfully"}
