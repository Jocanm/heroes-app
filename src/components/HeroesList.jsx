import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { nanoid } from 'nanoid'
import HeroeCard from './HeroeCard'

const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="grid grid-cols-3 gap-3 mt-5">
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
