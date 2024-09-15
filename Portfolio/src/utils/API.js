export const fetchRepositories = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/fredonyernesto/repos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
};


