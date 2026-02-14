export type EventCategory = "Workshop" | "Networking" | "Social" | "Charity" | "Professional"

export interface Event {
    id: string
    title: string
    description: string
    date: string
    location: string
    category: EventCategory
    image: string
    attendees?: number
    capacity?: number
    registrationDeadline?: string
    price?: number
    organizer?: string
}

export interface MemoryLaneItem {
    id: number
    title: string
    date: string
    image: string
    span?: string
}