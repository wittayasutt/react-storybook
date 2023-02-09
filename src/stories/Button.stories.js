import React from 'react';

import Button from '../components/Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Add to cart',
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Add to cart',
	variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: 'Add to cart',
	variant: 'tertiary',
};

export const Small = Template.bind({});
Small.args = {
	label: 'Add to cart',
	size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
	label: 'Add to cart',
	size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
	label: 'Add to cart',
	size: 'large',
};
