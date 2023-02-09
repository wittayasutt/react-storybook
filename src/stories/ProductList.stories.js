import React from 'react';

import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';

export default {
	title: 'Components/ProductList',
	component: ProductList,
	argTypes: {
		numberOfChildren: { type: 'number', defaultValue: 6 },
		itemsPerRow: { type: 'number', defaultValue: 2 },
		itemsPerRowTablet: { type: 'number', defaultValue: 3 },
		itemsPerRowDesktop: { type: 'number', defaultValue: 4 },
	},
};
const Template = ({ numberOfChildren, ...args }) => (
	<ProductList {...args}>
		{[...Array(numberOfChildren).keys()].map(() => (
			<ProductItem />
		))}
	</ProductList>
);

export const Default = Template.bind({});
ProductList.args = {};

export const EightPerRowDesktop = Template.bind({});
EightPerRowDesktop.args = {
	numberOfChildren: 10,
	itemsPerRow: 4,
	itemsPerRowTablet: 6,
	itemsPerRowDesktop: 8,
};

export const TwelvePerRowDesktop = Template.bind({});
TwelvePerRowDesktop.args = {
	numberOfChildren: 14,
	itemsPerRow: 6,
	itemsPerRowTablet: 9,
	itemsPerRowDesktop: 12,
};
