const Search = () => {
    return (
        <header>
            <h2 className="header__title">
                Blocklock Title & Escrow 
            </h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, state, city, or ZIP code"
            />
        </header>
    );
}

export default Search;