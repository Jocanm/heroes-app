import heroes from "../data/heroes";


export const getHeroesByID = (id) =>{

    return heroes.find(e=>(e.id === id))
}