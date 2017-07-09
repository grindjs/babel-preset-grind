const env = {
	targets: { },
	useBuiltIns: true
}

const major = Number.parseFloat(process.env.BABEL_TARGET_VERSION || process.version.substring(1))

if(major >= 8) {
	env.targets.node = '8.0.0'
} else if(major >= 7) {
	env.targets.node = '7.0.0'
	env.exclude = [ 'transform-async-to-generator' ]
} else {
	env.targets.node = '6.9.0'
}

function buildPreset(context, opts) {
	opts = opts || { }

	opts['transform-object-rest-spread'] = opts['transform-object-rest-spread'] || { }

	if(opts['transform-object-rest-spread'].useBuiltIns === void 0) {
		opts['transform-object-rest-spread'].useBuiltIns = true
	}

	return {
		presets: [ [ require('babel-preset-env'), Object.assign({ }, env, opts['preset-env'] || { }) ] ],
		plugins: [
			[ require('babel-plugin-transform-class-properties'), opts['transform-class-properties'] || { } ],
			[ require('babel-plugin-transform-object-rest-spread'), opts['transform-object-rest-spread'] ],
			[ require('babel-plugin-import-auto-name'), opts['import-auto-name'] || { } ],
			[ require('babel-plugin-transform-isnil').default, opts['transform-isnil'] || { } ]
		]
	}
}

module.exports = buildPreset
