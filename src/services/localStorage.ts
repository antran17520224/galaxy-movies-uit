export const getLocalStorage = (key: string) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
};