const Comment = ({comment}) => {
    const {id,name,email,body} = comment
    return (
        <div>
            <h2>id - {id}, name - {name}, email - {email}</h2>
            <div>{body}</div>
        </div>
    );
};

export {Comment};