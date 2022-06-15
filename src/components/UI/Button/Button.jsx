import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
