/// /ui reads these state and /impl modifies them
/// Dependency direction: /ui -> /state <- /impl

import { User } from "$lib/core/user";

class Reactive<T> {
	value: T = $state() as T;

	constructor(v: T) {
		this.value = v;
	}

	set(v: T) {
		this.value = v;
	}

	update(updateFn: (v: T) => T) {
		this.value = updateFn(this.value);
	}
}

export let user = new Reactive(new User('', '', 0))
