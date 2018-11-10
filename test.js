import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('FOO_BAR');
	const expectedResult = 'fooBar';

	t.deepEqual(result[0].title, expectedResult);
	t.deepEqual(result[0].arg, expectedResult);
});
