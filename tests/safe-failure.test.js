const test = require('ava');
const extract = require('../index');

test('uses default when something goes wrong', t => {
	const d = {};
	const a = [];

	t.is(extract(d, x => x.na, 'default'), 'default');
	t.is(extract(a, x => x[0], 'default'), 'default');
	t.is(extract(a, x => {throw Error('nope');}, 'default'), 'default');
	t.is(extract(a, x => {}, 'default'), 'default');
});

test('extracts data from objects and arrays', t => {
	const d = {a: 'b'};
	const a = [1,2,3];

	t.is(extract(d, x => x.a), 'b');
	t.is(extract(a, x => x[0]), 1);
	t.is(extract(a, x => x.find(v => v === 2)), 2);
	t.is(extract(a, x => x.length), 3);
	t.is(extract(a, x => null), null);
});
