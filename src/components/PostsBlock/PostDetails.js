const PostDetails = ({postDetails}) => {
    const {title,id,body} = postDetails

    return (
        <div>
            <div>{id}, {title}</div>
            <div>{body}</div>

        </div>
    );
};

export {PostDetails};