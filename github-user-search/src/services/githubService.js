import axios from 'axios';

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async ({ username, location, minRepos }) => {
    let query = '';

    if (username) {
        query += `${username}`;
    }

    if (location) {
        query += `+location:${location}`;
    }

    if (minRepos) {
        query += `+repos:>${minRepos}`;
    }

    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
            headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
