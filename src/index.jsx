import { render } from 'react-dom';
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss'

function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}

render(<App />, document.getElementById('root'));