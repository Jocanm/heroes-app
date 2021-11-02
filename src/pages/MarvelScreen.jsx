import React from 'react'
import HeroesList from '../components/HeroesList'

const MarvelScreen = () => {
    return (
        <div className="p-10 pt-5">
            <h1 className="text-4xl my-4" >Marvel Heroes</h1>
            <hr />

            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}

export default MarvelScreen
