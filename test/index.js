import test from 'ava'
import { transform } from "babel-core"
import grindPresent from '../'

test('exposes function', t => {
	t.is(typeof grindPresent, 'function')
})

test('doesn’t throw with no options passed', t => {
	grindPresent()
	t.pass()
})

test('exposes a separate list of plugins', t => {
	t.is(Array.isArray(grindPresent().plugins), true)
})

test('options', t => {
	grindPresent(null, {
		'import-auto-name': {
			'autoresolve': true
		}
	})

	t.pass()
})

test('exec', t => {
	t.is(
		transform('const a = { ...obj, a: true }', grindPresent()).code,
		'"use strict";\n\nconst a = Object.assign({}, obj, { a: true });'
	)
})

test('class properties', t => {
	t.is(
		transform('class test {\nstatic a = 1;\nb = 2;\n}', grindPresent()).code,
		'"use strict";\n\nclass test {\n  constructor() {\n    this.b = 2;\n  }\n\n}\ntest.a = 1;'
	)
})
