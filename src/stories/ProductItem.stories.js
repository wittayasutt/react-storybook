import React from 'react';

import ProductItem from '../components/ProductItem';

export default {
	title: 'Components/ProductItem',
	component: ProductItem,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: { type: 'radio' },
		},
		maxWidth: { type: 'number', defaultValue: 360 },
		backgroundColor: { control: 'color' },
		borderRadius: { type: 'number', defaultValue: 8 },
	},
};

const Template = (args) => <ProductItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
};

export const NoBorderRaduis = Template.bind({});
NoBorderRaduis.args = {
	borderRadius: 0,
};

export const NoBorderRaduisBlack = Template.bind({});
NoBorderRaduisBlack.args = {
	backgroundColor: '#252525',
	borderRadius: 0,
};

export const Large = Template.bind({});
Large.args = {
	maxWidth: 720,
};
