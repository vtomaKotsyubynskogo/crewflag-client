import "./styles/SearchInput.scss"

export default function SearchInput() {
	return <>
        <div className="search">
            <img src="/images/search-icon-mobile.svg" alt="Search" className="search__icon"/>
            <input
                type="search"
                className="search__input"
                placeholder="Ищите интересное в  CrewFlag"
            />
        </div>
    </>;
}
