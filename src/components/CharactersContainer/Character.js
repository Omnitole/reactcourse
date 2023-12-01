const Character = ({character}) => {

    const {name, image} = character
    return (
        <div>
            <div>name:{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};