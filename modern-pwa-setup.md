import os

base_path = "C:/Users/Evgeny/Desktop/modern-pwa"

structure = {
    "server/app": [
        "__init__.py",
        "main.py",
        "config.py",
        "database.py",
        "core/__init__.py",
        "core/security.py",
        "core/dependencies.py",
        "auth/__init__.py",
        "auth/router.py",
        "auth/models.py",
        "auth/schemas.py",
        "auth/utils.py",
        "api/__init__.py",
        "api/v1/__init__.py",
        "api/v1/users.py",
        "api/v1/items.py",
    ],
    "server": [
        "alembic/",
        "tests/",
        "requirements.txt",
        ".env.example"
    ],
    "client": [
        "package.json",
        "vite.config.js",
        "tailwind.config.js",
        "postcss.config.js",
        "tsconfig.json",
        "public/index.html",
        "public/manifest.json",
        "public/favicon.svg",
        "public/favicon.ico",
        "public/pwa-192x192.png",
        "public/pwa-512x512.png",
        "public/apple-touch-icon.png",
        "public/sw.js",
        "src/main.tsx",
        "src/App.tsx",
        "src/index.css",
        "src/types/index.ts",
        "src/hooks/useAuth.tsx",
        "src/hooks/useLocalStorage.ts",
        "src/hooks/useSwipe.ts",
        "src/hooks/useNotifications.ts",
        "src/api/auth.ts",
        "src/api/users.ts",
        "src/api/posts.ts",
        "src/api/matches.ts",
        "src/api/messages.ts",
        "src/components/Layout.tsx",
        "src/components/Navigation.tsx",
        "src/components/ProtectedRoute.tsx",
        "src/components/ui/Button.tsx",
        "src/components/ui/Input.tsx",
        "src/components/ui/Modal.tsx",
        "src/components/ui/LoadingSpinner.tsx",
        "src/components/ui/Toast.tsx",
        "src/components/feed/PostCard.tsx",
        "src/components/feed/CreatePost.tsx",
        "src/components/feed/CommentSection.tsx",
        "src/components/profile/ProfileCard.tsx",
        "src/components/profile/ImageUpload.tsx",
        "src/components/profile/InterestSelector.tsx",
        "src/components/swipe/SwipeCard.tsx",
        "src/components/swipe/MatchModal.tsx",
        "src/components/swipe/SwipeControls.tsx",
        "src/pages/LandingPage.tsx",
        "src/pages/FeedPage.tsx",
        "src/pages/SearchPage.tsx",
        "src/pages/SwipePage.tsx",
        "src/pages/ProfilePage.tsx",
        "src/pages/MatchesPage.tsx",
        "src/pages/MessagesPage.tsx",
        "src/pages/SettingsPage.tsx",
        "src/utils/constants.ts",
        "src/utils/helpers.ts",
        "src/utils/validation.ts",
        "src/utils/storage.ts",
        "src/assets/images/",
        "src/assets/icons/",
        "src/assets/fonts/"
    ],
    "": [
        "docker-compose.yml",
        ".gitignore",
        "README.md"
    ]
}

for folder, files in structure.items():
    for file in files:
        path = os.path.join(base_path, folder, file)
        if file.endswith("/"):
            os.makedirs(path, exist_ok=True)
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "w") as f:
                f.write("")

"Структура modern-pwa успешно создана на рабочем столе."
