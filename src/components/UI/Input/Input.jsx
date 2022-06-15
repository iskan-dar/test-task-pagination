import PropTypes from 'prop-types';
import React from 'react';
import styles from './Input.module.css';

function Input(props) {
    return (
        <input
            className={`${styles.input} ${props.className}`}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
