import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post" key={Date.now}>
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
 