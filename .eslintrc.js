const {resolve} = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		...[
			'@vercel/style-guide/eslint/node',
			'@vercel/style-guide/eslint/typescript',
			'@vercel/style-guide/eslint/browser',
			'@vercel/style-guide/eslint/react',
			'@vercel/style-guide/eslint/next',
		].map(require.resolve),
	],
	parserOptions: {
		project,
	},
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
			node: {
				extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	ignorePatterns: ['node_modules/', 'dist/'],
	// add rules configurations here
	rules: {
		'@next/next/no-img-element': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/require-await': 'off',
		camelcase: 'off',
		'import/no-cycle': 'off',
		'import/no-default-export': 'off',
		'no-await-in-loop': 'warn',
		'no-console': 'off',
		'no-nested-ternary': 'off',
		'no-param-reassign': 'warn',
		'react/no-unknown-property': 'warn',
	},
};
