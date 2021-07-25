export function weeksBetween(d1, d2) {
    return (d2 - d1) / (7 * 24 * 60 * 60 * 1000);
}

export function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}