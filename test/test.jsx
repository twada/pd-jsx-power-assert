const React = require('react');
const Foo = require('../src/components/Foo.jsx');
const shallow = require('enzyme').shallow;
const assert = require('power-assert');

it('shallow', () => {
    assert(shallow(<Foo />).contains(<p>こんばんは</p>));
});
