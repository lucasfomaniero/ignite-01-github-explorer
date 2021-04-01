export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.name}</p>
            <a href={props.repository?.html_url}>Acessar repositories</a>
        </li>
    );
}