import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.itemsPerRow},
		minmax(0, 1fr)
	);
	grid-template-rows: max-content;
	column-gap: 16px;
	row-gap: 16px;

	padding: 16px;

	@media only screen and (min-width: ${(props) => props.theme.breakpoint.tablet}) {
		grid-template-columns: repeat(
			${(props) => props.itemsPerRowTablet},
			minmax(0, 1fr)
		);
	}

	@media only screen and (min-width: ${(props) => props.theme.breakpoint.desktop}) {
		grid-template-columns: repeat(
			${(props) => props.itemsPerRowDesktop},
			minmax(0, 1fr)
		);

		padding: 16px 0 0 0;
	}
`;

const ProductList = ({
	children,
	itemsPerRow,
	itemsPerRowTablet,
	itemsPerRowDesktop,
}) => {
	return (
		<Wrapper
			itemsPerRow={itemsPerRow}
			itemsPerRowTablet={itemsPerRowTablet}
			itemsPerRowDesktop={itemsPerRowDesktop}>
			{children}
		</Wrapper>
	);
};

ProductList.propTypes = {
	children: PropTypes.node,
	itemsPerRow: PropTypes.number,
	itemsPerRowTablet: PropTypes.number,
	itemsPerRowDesktop: PropTypes.number,
};

ProductList.defaultProps = {
	children: <></>,
	itemsPerRow: 2,
	itemsPerRowTablet: 3,
	itemsPerRowDesktop: 4,
};

export default ProductList;
