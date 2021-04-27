export const PI = 3.141592;

export function pow(base, exponenential) {
    if (exponenential === 0) return 1;

    return base * pow(base, exponenential -1);
}