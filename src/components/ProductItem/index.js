import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
	background-color: ${(props) => props.backgroundColor};
	border-radius: ${(props) => `${props.borderRadius}px`};

	cursor: pointer;
	transition: 0.2s;

	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px`};

	&:hover {
		box-shadow: 0 8px 24px 0 rgba(136, 136, 136, 0.2);
	}

	&:active {
		box-shadow: 0 16px 48px 0 rgba(136, 136, 136, 0.2);
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
`;

const Image = styled.img``;

const Detail = styled.div`
	padding: 16px;
`;

const DetailTitle = styled.div``;

const DetailPrice = styled.div`
	font-weight: 700;
	color: ${(props) => props.theme.color.salePrice};
`;

const ButtonWrapper = styled.div`
	padding: 16px;
`;

const ProductItem = ({ variant, maxWidth, backgroundColor, borderRadius }) => {
	return (
		<Wrapper
			maxWidth={maxWidth}
			backgroundColor={backgroundColor}
			borderRadius={borderRadius}>
			<ImageWrapper>
				<Image
					src={require('../../assets/images/iphone14.webp')}
					alt='product image'
				/>
			</ImageWrapper>
			<Detail>
				<DetailTitle>Apple iPhone 14 Pro Max</DetailTitle>
				<DetailPrice>$1,899</DetailPrice>
			</Detail>
			<ButtonWrapper>
				<Button label='Add to cart' variant={variant} fullWidth />
			</ButtonWrapper>
		</Wrapper>
	);
};

ProductItem.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	maxWidth: PropTypes.number,
	backgroundColor: PropTypes.string,
	borderRadius: PropTypes.number,
};

ProductItem.defaultProps = {
	variant: 'primary',
	backgroundColor: '#ffffff',
	borderRadius: 8,
};

export default ProductItem;
