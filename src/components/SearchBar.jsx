const SearchBar = ({search, setSearch, maxLength, setMaxLength, sortByLength}) => {
    
   // let sortValue = false;

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortHandler = (e) => {
        sortByLength(e.target.value);
    }

    // const sortByLength = () => {
    //     if(sortValue = false){
    //         sortValue = true;
    //         setSortValue = sortValue;
    //     }
    // }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick = {sortHandler}>Sort</button>
    </>
}

export default SearchBar;