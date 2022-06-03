module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'dev',
				'prod',
				'seed',
				'build',
				'release',
				'cnc',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'test',
				'chore',
				'style'
			]
		]
	}
};
