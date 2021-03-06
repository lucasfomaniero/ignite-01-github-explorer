import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

const repository = {
    name: 'Github Explorer',
    description: 'Forms in React',
    link: 'https://github.com/lucasmaniero'
}
// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[repositories])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {
                    repositories.map(repository => (
                        <RepositoryItem key={repository.name} repository={repository} />
                    ))
                }
            </ul>
        </section>
    );
}