'use strict';
const meow = require('meow');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ alam
`);

render(React.createElement(ui));
2
