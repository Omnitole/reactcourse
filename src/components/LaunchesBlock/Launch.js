const Launch = ({launch}) => {
    const {mission_name:name,launch_year:year,links:{mission_patch_small:image}} = launch
    return (
        <div>
            <div>Mission name - {name}, year of launch - {year}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Launch};
