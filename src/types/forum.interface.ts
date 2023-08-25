export interface ForumCategory {
    readonly id: number;
    title: string;
    description?: string;
    university?: number;
    created_at?: string;
    updated_at?: string;
    is_active?: boolean;
}