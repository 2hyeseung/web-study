const PostItem = (props) => {
    const { post } = props;
    return (
        <div className="PostItem">
            <div>
                <span className="id">No.{post.id} - </span>
                <span className="title">{post.title}</span>
            </div>
            <p className="body">{post.body}</p>
        </div>
    );
};

export default PostItem;
