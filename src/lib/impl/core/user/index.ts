import type { UserStore } from "$lib/core/user";
import { User } from "$lib/core/user";

export async function newUserStore(): Promise<UserStore> {
	return {save, get}
}

async function save(): Promise<boolean> {
	return true;
}

async function get(): Promise<User> {
	return new User('', '', 0);
}