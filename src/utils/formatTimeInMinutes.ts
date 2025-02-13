export const formatTimeInMinutes = (time: number) => {
    return `${Math.floor(time / 60)} min ${time % 60} s`;
}