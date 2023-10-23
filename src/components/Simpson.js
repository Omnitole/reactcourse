const Simpson = ({simpson}) => {
    const {name,age,image,bio} = simpson
    return (
        <div>
            <div>Name - {name}, age - {age}. {bio}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};