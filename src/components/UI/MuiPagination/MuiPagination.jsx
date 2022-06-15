import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';

function MuiPagination(props) {
    return (
        <Pagination
            variant="outlined"
            color="primary"
            page={props.page}
            count={props.count}
            onChange={props.onChange}
        />
    );
}

MuiPagination.propTypes = {
    page: PropTypes.number,
    count: PropTypes.number,
    onChange: PropTypes.func,
};

MuiPagination.defaultProps = {
    count: 1,
};

export default MuiPagination;
