from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.v1 import users, items, auth, posts, comments, profile, messages, search, settings

app = FastAPI(title="Modern PWA API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api/v1/users", tags=["users"])
app.include_router(items.router, prefix="/api/v1/items", tags=["items"])
app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(posts.router, prefix="/api/v1/posts", tags=["posts"])
app.include_router(comments.router, prefix="/api/v1/comments", tags=["comments"])
app.include_router(profile.router, prefix="/api/v1/profile", tags=["profile"])
app.include_router(messages.router, prefix="/api/v1/messages", tags=["messages"])
app.include_router(search.router, prefix="/api/v1/search", tags=["search"])
app.include_router(settings.router, prefix="/api/v1/settings", tags=["settings"])

@app.get("/")
def root():
    return {"message": "API is running"}
