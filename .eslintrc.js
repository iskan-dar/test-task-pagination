module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'func-names': 'off',
        'no-unused-vars': 'warn',
        'class-methods-use-this': 'off',
        'max-len': ['error', { code: 100 }],
        'no-console': 'warn',
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/destructuring-assignment': [2, 'never'],
        'react/forbid-prop-types': [0],
        'react/require-default-props': [2, {
            functions: 'ignore',
        }],
        'react/button-has-type': [0],
    },
};
