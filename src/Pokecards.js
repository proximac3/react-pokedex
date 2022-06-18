import './App.css';

//create a new pokemon card with
const Pokecard = ({id,name, type, base_experience}) => {
    return (
        <>
            <div className="cards">
                <h1>{name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokemon'/>
                <p>{ type}</p>
                <p>{ base_experience}</p>
            </div>
        </>
    )
}

export default Pokecard