import type { UserStore, User } from '$lib/core/user'

export class UserSomeWork {
	#userStore: UserStore;
	#ucl: UserComplexLogic;

	constructor(userStore: UserStore, ucl: UserComplexLogic) {
		this.#userStore = userStore;
		this.#ucl = ucl;
	}

	getUser(): Promise<User> | null {
		return this.#userStore.get()
	}

	someComplexLogic() {
		this.#ucl.compute();
	}
}

export interface UserComplexLogic {
	compute(): void;
}