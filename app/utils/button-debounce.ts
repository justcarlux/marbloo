const buttonDebounce = 400;

export function isButtonDebounceExpired(lastSubmitted: number) {
    return Date.now() - lastSubmitted > buttonDebounce;
}
