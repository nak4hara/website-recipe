import './SearchBar.css'
import InputText from "../../atoms/input/InputText"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBarAlternative({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event)  => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter)
        }
    }

    return (
        <div className='search'>
            <div className='search-input'>
                <InputText
                    placeholder='Search here...'
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className='search-icon'>
                    <SearchIcon fontSize='large' />
                </div>
            </div>
            <div className='data-result'>
                {filteredData.map((value, key) => {
                    return (
                        <a className='data-item' href='https://www.google.com' target='_blank' key={value.link}>
                            {value.title}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}