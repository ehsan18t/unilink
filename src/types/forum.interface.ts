import { User } from "./user.interface";

export interface Forum {
    readonly id: number;
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
    category: number;
    university: number;
}

export interface ForumCategory {
    readonly id: number;
    title: string;
    description?: string;
    university?: number;
    created_at: Date;
    updated_at: Date;
    is_active?: boolean;
}

export interface ForumPost {
    readonly id: number;
    title: string;
    content: string;
    author: User;
    forum: number;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
}
