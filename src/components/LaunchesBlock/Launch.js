const Launch = ({launch}) => {
    const {mission_name:name,launch_year:year,links: {mission_patch_small}} = launch
    return (
        <div>
            <div>Mission name - {name}, year of launch - {year}</div>
            <img src={mission_patch_small} alt={name}/>
        </div>
    );
};

export {Launch};
