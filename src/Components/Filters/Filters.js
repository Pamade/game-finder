import React, {useState} from 'react'

function Filters({getData, apiCall}) {
    const date = new Date();
    const today = date.toLocaleDateString('en-ZA',{ year: "numeric", month: "2-digit",day: "2-digit",}).replaceAll('/', '-')
    const orderings = ['released', 'added', 'created', 'updated', 'rating', 'metacritic']
    const [filters, setFilters] = useState({ordering: 'metacritic', from:'2010-01-01', to: today})
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFilters(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        getData(apiCall + `&ordering=-${filters.ordering}&dates=${filters.from},${filters.to}`)
    }

    return (
            <form className="filters" onSubmit={handleSubmit}>
                <div className="filters__box">
                    <label className="filters__label">From: </label>
                    <input className="filters__input" name="from" value={filters.from} type="date" onChange={handleChange}/>
                </div>
                <div className="filters__box">
                    <label className="filters__label">To: </label>
                    <input className="filters__input" name="to" value={filters.to} type="date" onChange={handleChange} />
                </div>
                <div className="filters__box">
                    <label className="filters__label">Filter By: </label>
                    <select name="ordering" value={filters.ordering} onChange={handleChange}>
                        {orderings.map(value => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
                <button className="filters__btn">Filter</button>
            </form>
    )
}

export default Filters