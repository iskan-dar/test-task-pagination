import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './SearchForm.module.css';

function SearchForm(props) {
    const [inputValue, setInputValue] = React.useState('');

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const query = new URLSearchParams({ q: inputValue }).toString();
        try {
            const { data } = await axios.get(
                `https://dummyjson.com/posts/search?${query}`,
            );

            if (!data.posts.length) {
                props.setFoundPosts([{ title: 'No results found' }]);
                props.setCurrentPage(1);
            } else {
                props.setFoundPosts(data.posts);
                props.setCurrentPage(1);
            }
            setInputValue('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className={styles.searchForm} onSubmit={formSubmitHandler}>
            <Input
                className={styles.searchForm__input}
                type="text"
                placeholder="Please, type here the words you want to search"
                value={inputValue}
                onChange={inputChangeHandler}
            />
            <Button className={styles.searchForm__button} type="submit">Search</Button>
        </form>
    );
}

SearchForm.propTypes = {
    setFoundPosts: PropTypes.func,
    setCurrentPage: PropTypes.func,
};

export default SearchForm;
