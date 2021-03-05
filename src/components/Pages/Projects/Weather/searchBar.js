import React, { useState } from 'react'
import {GoSearch} from 'react-icons/go'
import './weather.css'

function SearchBarComp(props){
    let isMobile = window.innerWidth < 900;
    const initialFormState = '';
    const [searchContent, setCountry] = useState(initialFormState);

    const handleChange = (event) => {
        setCountry(event.target.value);
    }
    return (
        <div class={isMobile ? 'container px-0' : 'container' }>
            <form
                class='searchBarW'
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!searchContent) return;
                    props.searchCountry(searchContent);
                    setCountry(initialFormState);
                }}>
                <input
                    type="text"
                    name="country"
                    value={searchContent}
                    placeholder='Country..'
                    onChange={handleChange}
                />
                <button type="submit" ><GoSearch size={ isMobile? 10 : 20 }/></button>
            </form>
        </div>
    )
}
export default SearchBarComp;