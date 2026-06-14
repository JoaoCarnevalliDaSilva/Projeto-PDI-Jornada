import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h2>
                Header do Site
            </h2>

            <div className='menu'>
                <Link to={"/Avaliacoes"}>Avaliacoes</Link>
            </div>

        </header>
    )
}

export default Header;