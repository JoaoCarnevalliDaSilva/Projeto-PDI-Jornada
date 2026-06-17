import { Link } from 'react-router-dom'

import './style.css'

function Header() {
    return (
        <header className='cabecalho'>

            <Link className='logo' to={"/"}>Jornada</Link>
            <Link className='avaliacoes' to={"/Avaliacoes"}>Avaliacoes</Link>

            <div className='lista-menu'>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>


        </header>
    )
}

export default Header;