import { User } from "./user.interface";

export interface Post {
    readonly id: number;
    title: string;
    category: string;
    description: string;
    user: any;
    link?: string;
    votes: number;
    created_at: string;
    comments: number;
}