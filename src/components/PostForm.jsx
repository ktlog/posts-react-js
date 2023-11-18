import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, key: Date.now()
        }
        create(newPost)
        setPost({title: '', description: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                name="title"
                placeholder="Название поста"
            />
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type="text"
                name="description"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;