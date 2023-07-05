import InputText from "../../atoms/input/InputText"
import './SearchBar.css'
import MagnifyingGlass from '/src/assets/magnifying-glass.svg'
import Button from "../../atoms/Button/Button"

const SearchBar = () => {
    return (
        <section className="search-bar">
            <InputText />
            <Button>
                <img id='search-icon' src={MagnifyingGlass} alt="Search button" />
            </Button>
        </section>
    )
}

export default SearchBar

