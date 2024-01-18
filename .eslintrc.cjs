module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    plugins: ['import', 'prettier', 'unused-imports'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        },
        sourceType: 'module' // Allows for the use of imports
    },
    settings: {
        react: {
            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-undef': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'internal'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'prettier/prettier': ['warn', { 'usePrettierrc:': true }]
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off' // Disable prop-types as we use TypeScript for type checking
            }
        }
    ]
}
