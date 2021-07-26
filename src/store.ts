import { writable } from 'svelte/store';
import { isValidDate } from './utils/utils';
import * as localStorage from './utils/localStorage'

const storedDateOfBirth = localStorage.readValue("dateOfBirth", null);

function createDateOfBirth() {
    const { subscribe, set, update } = writable<string | null>(storedDateOfBirth);

    return { subscribe, set, update, reset: () => set(null) };
}

// Format: YYYY-MM-DD
export const dateOfBirth = createDateOfBirth();

dateOfBirth.subscribe(date => {
    localStorage.setValue("dateOfBirth", isValidDate(new Date(date)) ? date : null)
});

