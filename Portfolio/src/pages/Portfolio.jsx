import React, { useState, useEffect } from 'react';
import { fetchRepositories } from '../utils/API';
import './Repos.css';

export default function Repositories() {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepositories = async () => {
            try {
                const data = await fetchRepositories();
                setRepos(data);
            } catch (error) {
                setError(error);
            }
        };

        getRepositories();
    }, []);

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 id='my-repos-title'>My GitHub Repositories</h1>
            <div className="container">
                <ul className="po_items_ho">
                    {repos.map(repo => (
                        <li key={repo.id} >
                            <a href={repo.html_url} target="_blank" className="po_item">
                                {repo.name}
                                <p id="date"> Created: {new Date(repo.created_at).toLocaleDateString()} </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
