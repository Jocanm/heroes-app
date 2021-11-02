import React from 'react'
import { Link } from 'react-router-dom'

const HeroeCard = ({ heroe }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe

    return (
        <div className="box-content border-2 flex animate_animated animate__flash">
            <img 
            src={`./assets/heroes/${id}.jpg`} 
            alt={superhero} 
            className="heroes-img"
            />
            <div className="p-3 flex flex-col justify-between">
                <h2 className="text-lg font-medium">{superhero}</h2>
                <p className="text-sm">{alter_ego}</p>

                {/* {
                    alter_ego!==characters && <p className="text-sm">{characters.split(', ')[0]}</p>
                } */}

                <p className="text-xs opacity-70 mt-2">
                    {first_appearance}
                </p>

                <Link 
                to={`/hero/${id}`}
                className="text-sm text-blue-400 align-bottom">
                    Mas...
                </Link>
            </div>
        </div>
    )
}

export default HeroeCard
