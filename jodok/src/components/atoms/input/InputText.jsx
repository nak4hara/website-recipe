import './InputText.styles.css'

const SearchInput = (props) => {

    return (
        <div className="input-text" >
            <input
                type="text"
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default SearchInput