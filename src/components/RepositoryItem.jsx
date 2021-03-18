export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.name}</p>
            <a href={props.repository?.link}>Acessar repositories</a>
        </li>
    );
}