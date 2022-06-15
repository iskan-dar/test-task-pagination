import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CurrentPagePostsLists.module.css';
import MuiList from '../UI/MuiList/MuiList';

function CurrentPagePostsList(props) {
    const navigate = useNavigate();
    const clickOnPostHandler = (id) => navigate(`/posts/${id}`);

    // Here I pass posts as props(drilling) to leave MuiList space for reuseability as UI element
    // There is a postsContext in contexts just for demo purposes to avoid props drilling
    return (
        <section className={styles.currentPagePostsList}>
            <h6 className={styles.currentPagePostsList__semanticH6}>Posts</h6>
            <MuiList list={props.posts} onClick={clickOnPostHandler} />
        </section>
    );
}

CurrentPagePostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
};

CurrentPagePostsList.defaultProps = {
    posts: [],
};

export default CurrentPagePostsList;
