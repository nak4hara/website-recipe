import InputText from "../../atoms/input/InputText"
import './SearchBar.css'
import MagnifyingGlass from '/src/assets/magnifying-glass.svg'
import Button from "../../atoms/Button/Button"
import { useEffect, useState } from "react"

const SearchBar = ({recipesTitle}) => {
    const myList = recipesTitle;

    const [recipes, setRecipes] = useState(myList)
    const [search, setSearch] = useState('')

    useEffect(
        () => {
            if (search) {
                const newList = myList.filter((item) => {
                    return item.value.toLowerCase().includes(search.toLowerCase())
                })
                setRecipes(newList)
            } else {
                setRecipes(myList)
            }
        }, [search]
    )

    const toType = (e) => setSearch(e.target.value)
    
    return (
        <section className="search-bar">
            <InputText
                value={search}
                onChange={toType}
                placeholder='Search here...'
            />
            <Button>
                <img id='search-icon' src={MagnifyingGlass} alt="Search button" />
            </Button>

            {recipes.map((item) => {
                return(
                    <div className='recipe-list hidden' key={item.id}>
                        <h3>{item.value}</h3>
                    </div>
                )})
            }
        </section>
    )
}

export default SearchBar

