import React from 'react'
import HeroesList from '../components/HeroesList'

const DcScreen = () => {
    return (
        <div className="p-10 pt-5">
            <h1 className="text-4xl my-4">Dc Heroes</h1>
            <hr />

            <HeroesList publisher="DC Comics" />
        </div>
    )
}

export default DcScreen
