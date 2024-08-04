import type { UserComplexLogic } from "$lib/usecase/user"
import { user } from '$lib/state/index.svelte';

export function newUserComplexLogic(): UserComplexLogic {
	return { compute }
}

function compute(): void {
	console.log(user.value.age);
}
