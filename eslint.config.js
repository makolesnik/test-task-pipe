// Using module.exports instead of export default
module.exports = {
    files: ['src/*.js', 'test/*.js'],
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
            process: "readonly",
            module: true,
            require: true
        },
    },
    rules: {
        'no-unused-vars': 'warn',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },
};
