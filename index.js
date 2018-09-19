function buildPreset(context, opts) {
	opts = opts || { }

	return {
		plugins: [
			[ require('@babel/plugin-syntax-object-rest-spread') ],
			[ require('@babel/plugin-proposal-class-properties'), opts['transform-class-properties'] || { loose: true } ],
			[ require('@babel/plugin-transform-modules-commonjs'), opts['transform-modules-commonjs'] || opts['transform-es2015-modules-commonjs'] || { } ],
			[ require('babel-plugin-import-auto-name'), opts['import-auto-name'] || { } ],
			[ require('@shnhrrsn/babel-plugin-transform-isnil'), opts['transform-isnil'] || { } ]
		]
	}
}

module.exports = buildPreset
