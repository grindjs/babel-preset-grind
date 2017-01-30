const env = {
	targets: { },
	useBuiltIns: true
}

if(Number.parseFloat(process.env.BABEL_TARGET_VERSION || process.version.substring(1)) >= 7) {
	env.targets.node = 7.0
	env.exclude = [ 'transform-async-to-generator' ]
} else {
	env.targets.node = 6.9
}

module.exports = {
	presets: [ [ require('babel-preset-env'), env ] ],
	plugins: [
		require('babel-plugin-transform-class-properties'),
		require('babel-plugin-transform-object-rest-spread'),
		require('babel-plugin-import-auto-name'),
		require('babel-plugin-transform-isnil').default
	]
}
