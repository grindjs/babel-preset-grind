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
	t.is(transform('const a = true', grindPresent()).code, '"use strict";\n\nconst a = true;')
})
