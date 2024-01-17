import type { Entity, EntityId } from "./entity";

type Order = 'asc' | 'desc'
type OrderBy<E extends Entity<EntityId<string>, E['data']>> = keyof E['data'];

type PaginatedResult<E extends Entity<EntityId<string>, E['data']>> = {
    data: E[];
    pagination: {
        page: number;
        count: number;
        maxPage: number;
    }
}

export type QueryOptions<E extends Entity<EntityId<string>, E['data']>> = {
    limit?: number;
    page?: number;
    orderBy?: OrderBy<E>;
    order?: Order;
}

export type SaveData<E extends Entity<EntityId<string>, E['data']>> = Omit<E['data'], 'createdAt' | 'updatedAt'>
export type UpdateData<E extends Entity<EntityId<string>, E['data']>> = Omit<E['data'], 'createdAt' | 'updatedAt'>

export type Repository<E extends Entity<EntityId<string>, E['data']>> = {
    get: (id: E['id']) => Promise<E | undefined>
    getAll: (query: QueryOptions<E>) => Promise<PaginatedResult<E>>
    save: (data: SaveData<E>) => Promise<E>
    update: (id: E['id'], data: UpdateData<E>) => Promise<E | undefined>
    delete: (id: E['id']) => Promise<void>
}