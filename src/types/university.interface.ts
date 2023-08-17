import { User } from './user.interface'

export interface University {
    readonly id: number
    name: string
    domain: string
    admin: User
    is_approved: boolean
    is_banned: boolean
}