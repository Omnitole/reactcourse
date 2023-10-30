const User = ({user}) => {
    const {id,name,username,email} = user

    return (
        <div>
            Id - {id},name - {name}, username - {username}, email - {email}
        </div>
    );
};

export {User};