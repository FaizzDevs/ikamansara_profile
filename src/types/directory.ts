export interface Alumni {
    id: string
    name: string
    position: string
    company: string
    location: string
    gradYear: string
    industry: string
    city: string
    avatar: string
    bio?: string
    email?: string
    phone?: string
    socialLinks?: {
        linkedin?: string
        twitter?: string
        website?: string
    }
}

export interface FilterOptions {
    gradYear: string
    industry: string
    city: string
}