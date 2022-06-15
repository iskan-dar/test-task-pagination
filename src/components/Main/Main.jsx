/* eslint-disable no-nested-ternary */
import * as React from 'react';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Main.module.css';
import MuiPreloader from '../UI/MuiPreloader/MuiPreloader';
import CurrentPagePostsList from '../CurrentPagePostsList/CurrentPagePostsList';
import MuiPagination from '../UI/MuiPagination/MuiPagination';

export const API_URL = 'https://dummyjson.com/posts';

function Main() {
    console.count('Main');

    const [pagesCount, setPagesCount] = React.useState(0); // number of total pages
    const [currentPage, setCurrentPage] = React.useState(1); // current page
    const [foundPosts, setFoundPosts] = React.useState([]); // searched posts
    const [currentPagePosts, setCurrentPagePosts] = React.useState([]); // rendered posts
    const pageSize = 10;

    function pagesCountGenerator(postsCount) {
        return Math.ceil(postsCount / pageSize);
    }

    React.useEffect(() => {
        axios
            .get(
                `${API_URL}?limit=10&skip=${currentPage * pageSize - pageSize}`,
            )
            .then(({ data }) => {
                setCurrentPagePosts(data.posts);
                setPagesCount(pagesCountGenerator(data.total));
            });
    }, []);

    React.useEffect(() => {
        if (foundPosts.length) {
            setCurrentPagePosts(
                foundPosts.slice(
                    currentPage * pageSize - pageSize,
                    currentPage * pageSize,
                ),
            );
            setPagesCount(pagesCountGenerator(foundPosts.length));
        }
    }, [foundPosts.length]);

    // eslint-disable-next-line consistent-return
    const paginationChangeHandler = (_, num) => {
        setCurrentPage(num);
        if (foundPosts.length) {
            return setCurrentPagePosts(
                foundPosts.slice(num * pageSize - pageSize, num * pageSize),
            );
        }
        axios
            .get(
                `https://dummyjson.com/posts?limit=10&skip=${
                    num * pageSize - pageSize
                }`,
            )
            .then(({ data }) => setCurrentPagePosts(data.posts));
    };

    return (
        <div className={styles.main}>
            <div className={styles.main__search}>
                <SearchForm
                    foundPosts={foundPosts}
                    setFoundPosts={setFoundPosts}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className={styles.main__pagination}>
                <MuiPagination
                    page={currentPage}
                    count={pagesCount}
                    onChange={paginationChangeHandler}
                />
            </div>
            <div className={styles.main__content}>
                { currentPagePosts.length ? (
                    <CurrentPagePostsList posts={currentPagePosts} />
                ) : (
                    <MuiPreloader />
                )}
            </div>
        </div>
    );
}

export default Main;
