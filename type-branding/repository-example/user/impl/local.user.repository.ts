import { QueryOptions, SaveData, UpdateData } from "../../repository";
import { UserId, User } from "../user.entity";
import { UserRepository } from "../user.repository";

const users: User[] = [];

export class LocalUserRepository implements UserRepository {
    
    public async get(id: UserId) {
        return users.find(user => user.id === id);
    }

    public async getAll(query: QueryOptions<User>) {
        const { limit = 10, page = 1, orderBy = "createdAt", order = "asc" } = query;
        const offset = (page - 1) * limit;

        // skip sorting for now
        const data = users.slice(offset, offset + limit);

        return {
            data,
            pagination: {
                page,
                count: data.length,
                maxPage: Math.ceil(users.length / limit)
            }
        };
    }

    public async save(data: SaveData<User>) {
        const user: User = {
            id: Math.random().toString() as UserId,
            data: {
                ...data,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        };
        users.push(user);
        return user;
    }

    public async update(id: UserId, data: UpdateData<User>) {
        const user = await this.get(id);
        if (user) {
            user.data = {
                ...user.data,
                ...data,
                updatedAt: Date.now()
            };
        }
        return user;
    }

    public async delete(id: UserId) {
        const user = await this.get(id);
        if (user) {
            const index = users.indexOf(user);
            users.splice(index, 1);
        }
    }
}