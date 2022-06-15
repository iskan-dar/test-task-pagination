import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';

function MuiList(props) {
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
            }}
        >
            <List>
                {!!props.list.length
                    && props.list.map((post) => (
                        <ListItem key={post.id} disablePadding>
                            <ListItemButton
                                onClick={() => props.onClick(post.id)}
                            >
                                <ListItemText primary={post.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );
}

MuiList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
};

MuiList.defaultProps = {
    list: [],
};

export default MuiList;
