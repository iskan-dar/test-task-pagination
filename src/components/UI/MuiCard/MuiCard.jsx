import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function MuiCard(props) {
    return (
        <Box sx={{ minWidth: 275, maxWidth: '50%' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="body2">{props.body}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

MuiCard.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default MuiCard;
