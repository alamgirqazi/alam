'use strict';
const React = require('react');
const {Box, Text, Color} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'Website',
		url: 'https://alamgirqazi.github.io'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/alamgirqazi'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/alamgirqazi'
	},
	{
		label: 'Blog',
		url: 'https://alamgirqazi.github.io/blog'
	},
	{
		label: 'Tech Blog',
		url: 'https://alamgirqazi.github.io/tech-blog'
	},

	{
		label: 'Quit',
		action() {
			process.exit();
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>

		<Text> Hey there,<Color green> I'm Alamgir Qazi</Color>.</Text>

		</Box>
		<Box marginBottom={1}>

		<Text> I love doing things that energize me and help me grow! </Text>

		</Box>
		<Box marginBottom={1}>

		<Text> A <Color red>Liverpool F.C </Color>fan </Text>
		</Box>

		<Box marginBottom={1}>

		<Text> Curious Observer </Text>
		</Box>
		<Box marginBottom={1}>

		<Text> I try to do less things :D </Text></Box>


		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
