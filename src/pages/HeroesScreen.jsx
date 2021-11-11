import React, { useEffect, useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesByID } from '../selectors/getHeroesById'

const HeroesScreen = ({history}) => {

    const { heroeId } = useParams()
    // const heroe = getHeroesByID(heroeId)

    useEffect(()=>{
        localStorage.setItem('path',history.location.pathname)
    },[])
    
    const heroe = useMemo(() => getHeroesByID(heroeId), [heroeId])

    if (!heroe) {
        return <Redirect to="/" />
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    const charactersList = characters.split(', ')

    const handleReturn = () =>{
        history.length<=2 ? 
        history.push('/'):
        history.goBack()
    }


    return (
        <div className="p-10 pt-14 pl-20 flex flex-col md:flex-row">
            <div className="mb-7">
                <img
                    src={`../assets/heroes/${id}.jpg`}
                    alt={superhero}
                    className="heroes-screen animate__animated animate__zoomIn"
                />
            </div>
            <div className="md:pl-5 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold mb-4">{superhero}</h2>

                <ul>
                    <li><b>Alter ego:</b> {alter_ego}</li>
                    <li><b>Publisher:</b> {publisher}</li>
                    <li><b>First appearance:</b> {first_appearance}</li>
                </ul>
                <hr className="mt-3 w-96 hidden md:block" />

                <h2 className="mt-4 text-2xl font-bold">
                    Characters
                </h2>
                <ul>
                    {
                        charactersList.map(e => <li>{e}</li>)
                    }
                </ul>
                <button 
                className="px-5 py-2 rounded-md bg-emerald-500 mt-5 hover:bg-emerald-700 text-white hover:shadow-lg"
                onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroesScreen
