function buildPreset(context, opts) {
	opts = opts || { }

	opts['transform-object-rest-spread'] = opts['transform-object-rest-spread'] || { }

	if(opts['transform-object-rest-spread'].useBuiltIns === void 0) {
		opts['transform-object-rest-spread'].useBuiltIns = true
	}

	return {
		plugins: [
			[ require('babel-plugin-transform-class-properties'), opts['transform-class-properties'] || { } ],
			[ require('babel-plugin-transform-es2015-modules-commonjs'), opts['transform-es2015-modules-commonjs'] || { } ],
			[ require('babel-plugin-transform-object-rest-spread'), opts['transform-object-rest-spread'] ],
			[ require('babel-plugin-import-auto-name'), opts['import-auto-name'] || { } ],
			[ require('babel-plugin-transform-isnil'), opts['transform-isnil'] || { } ]
		]
	}
}

module.exports = buildPreset
