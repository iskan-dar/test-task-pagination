/* eslint-disable max-len */
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// !!! This context is not used in this application but for demo purposes only
// !!! Using context could prevent us from props drilling in a component CurrentPagePostsList

export const postsContext = React.createContext();

function PostsProvider(props) {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('https://dummyjson.com/posts/')
            .then(({ data }) => setPosts(data.posts));
    }, []);

    // React Context, and all its child nodes and Consumers are rerendered whenever the value prop changes. Because each Javascript object carries its own identity, things like object expressions ({ posts }) or function expressions get a new identity on every run through the component. This makes the context think it has gotten a new object and can cause needless rerenders and unintended consequences.
    const postsProvider = React.useMemo(
        () => ({ posts, setPosts }),
        [posts, setPosts],
    );

    return (
        <postsContext.Provider value={postsProvider}>
            {props.children}
        </postsContext.Provider>
    );
}

PostsProvider.propTypes = {
    children: PropTypes.element,
};

export default PostsProvider;
