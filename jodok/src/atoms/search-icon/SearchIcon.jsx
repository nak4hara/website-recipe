import MagnifyingGlass from '../../assets/magnifying-glass.svg'
import './SearchIcon.styles.css'

export default function SearchIcon() {
    return (
        <div>
            <img id="search-icon" src={MagnifyingGlass} alt="Magnifying Glass Icon" />
        </div>
    )
}