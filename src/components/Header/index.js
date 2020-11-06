import "./style.css"
import logo from "../../assets/images/logo.svg"

const Header = (props) => {
  return (
    <header className={props.name ? "dark":"blue"}>
        <nav>
            <h1><a href="#!"><img src={logo} className='img-logo'/></a></h1>
            <ul className='list'>
                <li><a href="#!">Premium</a></li>
                <li><a href="#!">Ajuda</a></li>
                <li><a href="#!">Baixar</a></li>
                <li>|</li>
                <li><a href="#!">Inscrever-se</a></li>
                <li><a href="#!">Entrar</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;