export function weeksBetween(d1: Date, d2: Date): number {
    return (d2.getTime() - d1.getTime()) / (7 * 24 * 60 * 60 * 1000);
}

export function isValidDate(date: any): boolean {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}