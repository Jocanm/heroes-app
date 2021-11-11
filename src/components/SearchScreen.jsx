import { nanoid } from "nanoid";
import HeroeCard from "./HeroeCard";
import useForm from "../hooks/useForm";
import { useLocation } from "react-router";
import queryString from 'query-string'
import getHeroesByName from "../selectors/getHeroesByName";
import { useEffect, useMemo } from "react";


const SearchScreen = ({ history }) => {

    useEffect(()=>{
        localStorage.setItem('path',history.location.pathname)
    },[])

    const location = useLocation()
    const { q = "" } = queryString.parse(location.search)

    const [values, handleInputChange] = useForm({
        heroeSearch: q
    })
    const { heroeSearch } = values;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${heroeSearch}`)
        // console.log(location.search);
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-5">Search Screen</h1>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mr-4 mb-5">
                    <h2 className="text-xl"> Search Form </h2>
                    <hr className="mb-3" />


                    <form onSubmit={handleSearch} className="flex flex-col">
                        <input
                            className="py-1 px-1 border border-gray-500 rounded-md outline-white"
                            type="text"
                            placeholder="Hero..."
                            name="heroeSearch"
                            value={heroeSearch}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="mt-1 px-8 py-2 bg-gray-500 hover:bg-gray-700 hover:shadow-lg rounded-md text-white"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="w-full">
                    <h2 className="text-xl text-center">Results</h2>
                    <hr className="mb-3" />

                    {
                        q === "" && (
                            <div className="w-full bg-blue-100 border-2 mt-5 p-4 rounded-md text-center text-blue-600 text-lg">
                                Search a hero
                            </div>
                        )
                    }

                    {
                        (q !== "" && heroesFilter.length === 0) && (
                            <div className="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg text-center" role="alert">
                                <span className="absolute inset-y-0 left-0 flex items-center ml-4">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                </span>
                                <p className="ml-6">{`The heroe "${q}" does not exist!`}</p>
                            </div>
                        )
                    }

                    <div className={`grid grid-cols-1 ${heroesFilter.length > 1 ? "lt:grid-cols-2" : "lt:grid-cols-1"} lt:gap-2`}>
                        {
                            heroesFilter.map(e => (
                                <HeroeCard
                                    key={nanoid()}
                                    heroe={e}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
