const RickAndMortyCharacter = ({character}) => {
    const {name,status,species,gender,image} = character
    return (
        <div>
            <div>Name - {name},status - {status}, species - {species}, gender - {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
}

export {RickAndMortyCharacter}