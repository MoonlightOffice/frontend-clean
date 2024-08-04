import { newUserStore } from '$lib/impl/core/user';
import { newUserComplexLogic } from '$lib/impl/usecase/user';
import { UserSomeWork } from './user';

const userStore = await newUserStore();
const userComplexLogic = newUserComplexLogic();

export const userSomeWork = new UserSomeWork(userStore, userComplexLogic);
