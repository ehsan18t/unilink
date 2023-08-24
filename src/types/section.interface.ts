import {User} from './user.interface';

export interface Section {
    readonly id: number;
    name: string;
    trimester: number;
    course: number;
    students: User[];
    faculty: User[];
}