const Post = ({post,getId}) => {
    const {id,title} = post

    return (
        <div>
            Id - {id}, title - {title}
            <button onClick={()=> getId(id)}>Post details</button>
        </div>
    );
};

export {Post};