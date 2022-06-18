// generate pokemon cards 
import Pokecard from './Pokecards.js'

const Pokedex = (props) => {
    return (
        <div className="row d-flex align-items-center justify-content-center mt-3">
            {props.items.map(
                item =>  <Pokecard id={item.id} name={item.name} type={item.type} base_experience={item.base_experience} />
            )}
        </div>
    )
}

export default Pokedex