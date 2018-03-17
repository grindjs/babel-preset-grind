function buildPreset(context, opts) {
	opts = opts || { }

	return {
		plugins: [
			[ require('babel-plugin-syntax-object-rest-spread') ],
			[ require('babel-plugin-transform-class-properties'), opts['transform-class-properties'] || { } ],
			[ require('babel-plugin-transform-es2015-modules-commonjs'), opts['transform-es2015-modules-commonjs'] || { } ],
			[ require('babel-plugin-import-auto-name'), opts['import-auto-name'] || { } ],
			[ require('babel-plugin-transform-isnil'), opts['transform-isnil'] || { } ]
		]
	}
}

module.exports = buildPreset
