import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Github Explorer',
    link: 'https://github.com/lucasmaniero'
}

export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}