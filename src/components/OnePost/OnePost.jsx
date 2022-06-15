import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import MuiCard from '../UI/MuiCard/MuiCard';
import styles from './OnePost.module.css';

function OnePost() {
    const { id } = useParams();
    const [post, setPost] = React.useState({});

    React.useEffect(() => {
        axios
            .get(`https://dummyjson.com/posts/${id}`)
            .then(({ data }) => setPost(data));
    }, [id]);

    return (
        <div className={styles.onePost}>
            <MuiCard title={post.title} body={post.body} />
        </div>
    );
}

export default OnePost;
