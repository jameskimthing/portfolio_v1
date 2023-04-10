import { writable, type Writable } from 'svelte/store';

const showProject: Writable<string> = writable('');
export { showProject };
