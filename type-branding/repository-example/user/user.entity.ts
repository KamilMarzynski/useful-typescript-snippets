import { Entity, EntityId } from "../entity";

export type UserId = EntityId<'UserId'>;

export const isValidUserId = (id: string): id is UserId => id.length > 0;

export type UserData = {
    firstName: string;
    lastName: string;
    email: string;
}

export type User = Entity<UserId, UserData>