import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { nanoid } from 'nanoid'
import HeroeCard from './HeroeCard'

const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    // const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lt:grid-cols-3 gap-3 mt-5 animate__animated animate__fadeIn">
            {
                heroes.map(heroe=>(
                    <HeroeCard 
                    key={nanoid()}
                    heroe={heroe} />
                ))
            }
        </div>
    )
}

export default HeroesList
