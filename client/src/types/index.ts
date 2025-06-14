// User types
export interface User {
  id: string
  name: string
  age: number
  location: string
  bio: string
  interests: string[]
  orientation: Orientation
  status: RelationshipStatus
  images: string[]
  lastActive: string
  email: string
  verified: boolean
  joinedAt: string
  preferences?: UserPreferences
}

export interface UserPreferences {
  ageRange: [number, number]
  distance: number
  showOnlineOnly: boolean
  genderPreference: Gender[]
  orientationPreference: Orientation[]
  interests: string[]
}

// Enums
export type Gender = 'male' | 'female' | 'non-binary' | 'other'

export type Orientation = 'hetero' | 'homo' | 'bi' | 'pan' | 'queer' | 'other'

export type RelationshipStatus = 'single' | 'relationship' | 'complicated' | 'open' | 'married'

export type OnlineStatus = 'online' | 'away' | 'offline'

// Post types
export interface Post {
  id: string
  userId: string
  user: User
  content: string
  images?: string[]
  likes: number
  comments: Comment[]
  timestamp: string
  isLiked: boolean
  tags?: string[]
}

export interface Comment {
  id: string
  userId: string
  user: User
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

// Match types
export interface Match {
  id: string
  users: [User, User]
  matchedAt: string
  lastMessage?: Message
  isActive: boolean
}

export interface Message {
  id: string
  matchId: string
  senderId: string
  content: string
  timestamp: string
  isRead: boolean
  type: 'text' | 'image' | 'emoji'
}

// Search and filter types
export interface SearchFilters {
  gender?: Gender
  orientation?: Orientation
  location?: string
  ageMin: number
  ageMax: number
  distance?: number
  interests?: string[]
  status?: RelationshipStatus
  onlineOnly?: boolean
}

export interface SearchResult {
  users: User[]
  total: number
  page: number
  hasMore: boolean
}

// Auth types
export interface AuthUser {
  id: string
  email: string
  name: string
  isVerified: boolean
  profile?: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  age: number
  location: string
  gender: Gender
  orientation: Orientation
}

// Event types
export interface CommunityEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  organizer: User
  attendees: User[]
  maxAttendees?: number
  tags: string[]
  isPrivate: boolean
  imageUrl?: string
}

// Notification types
export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  timestamp: string
  isRead: boolean
  actionUrl?: string
  data?: any
}

export type NotificationType = 
  | 'match' 
  | 'message' 
  | 'like' 
  | 'comment' 
  | 'event' 
  | 'system'

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// Form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface ReportForm {
  userId: string
  reason: ReportReason
  description: string
}

export type ReportReason = 
  | 'inappropriate_content'
  | 'harassment'
  | 'fake_profile'
  | 'spam'
  | 'other'

// Component prop types
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export interface InputProps {
  label?: string
  error?: string
  placeholder?: string
  type?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  disabled?: boolean
  className?: string
}