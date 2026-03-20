const maybeAddZero = (a) => a >= 10 ? a : `0${a}`;

export function shorttime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return `${maybeAddZero(hours)}:${maybeAddZero(minutes)}:${maybeAddZero(seconds)}`;
}
