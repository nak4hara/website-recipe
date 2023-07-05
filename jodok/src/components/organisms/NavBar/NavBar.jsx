import Logo from '../../atoms/logo/Logo'
import BarIcon from '../../atoms/menu-bars/BarIcon'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className='nav'>
            <Logo />
            <BarIcon />
        </nav>
    )
}