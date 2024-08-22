export const getAntiForgeryToken = async () => {
    const response = await fetch("https://localhost:7259/auth/antiforgery-token", {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error('Failed to fetch anti-forgery token');
    }
    const data = await response.json();
    localStorage.setItem('antiForgeryToken', data.requestToken);
    return data.requestToken;
};

export const getStoredToken = (): string | null => {
    return localStorage.getItem('antiForgeryToken');
};
