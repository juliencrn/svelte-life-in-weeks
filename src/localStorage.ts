export const readValue = <T>(key: string, initialValue: T): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
        return initialValue
    }

    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        console.warn(`Error reading localStorage key “${key}”:`, error)
        return initialValue
    }
}

export const setValue = <T>(key: string, value: T): void => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window == 'undefined') {
        console.warn(
            `Tried setting localStorage key “${key}” even though environment is not a client`,
        )
    }

    try {
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error)
    }
}
