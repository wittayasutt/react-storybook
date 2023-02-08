import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

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

	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(
			${(props) => props.itemsPerRowTablet},
			minmax(0, 1fr)
		);
	}

	@media only screen and (min-width: 1024px) {
		grid-template-columns: repeat(
			${(props) => props.itemsPerRowDesktop},
			minmax(0, 1fr)
		);

		padding: 16px 0 0 0;
	}
`;

const ProductList = ({
	itemsPerRow,
	itemsPerRowTablet,
	itemsPerRowDesktop,
}) => {
	return (
		<Wrapper
			itemsPerRow={itemsPerRow}
			itemsPerRowTablet={itemsPerRowTablet}
			itemsPerRowDesktop={itemsPerRowDesktop}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Wrapper>
	);
};

ProductList.propTypes = {
	itemsPerRow: PropTypes.number,
	itemsPerRowTablet: PropTypes.number,
	itemsPerRowDesktop: PropTypes.number,
};

ProductList.defaultProps = {
	itemsPerRow: 2,
	itemsPerRowTablet: 3,
	itemsPerRowDesktop: 4,
};

export default ProductList;
