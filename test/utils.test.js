import { makeCountString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current counts of changes to waterfront, skyline, and castle', (expect) => {
    const expected = "You've changed the waterfront 1 times, the skyline 2 times, and the castle 3 times.";

    const actual = makeCountString(1, 2, 3);

    expect.equal(actual, expected);
});