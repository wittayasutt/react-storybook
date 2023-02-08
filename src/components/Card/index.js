import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
	background-color: #ffffff;
	border-radius: ${(props) => `${props.borderRadius}px`};

	cursor: pointer;
	transition: 0.2s;

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
	color: #f1574f;
`;

const ButtonWrapper = styled.div`
	padding: 16px;
`;

const Card = ({ borderRadius }) => {
	return (
		<Wrapper borderRadius={borderRadius}>
			<ImageWrapper>
				<Image
					src={require('../../images/iphone14.webp')}
					alt='product image'
				/>
			</ImageWrapper>
			<Detail>
				<DetailTitle>Apple iPhone 14 Pro Max</DetailTitle>
				<DetailPrice>$1,899</DetailPrice>
			</Detail>
			<ButtonWrapper>
				<Button fullWidth>Add to cart</Button>
			</ButtonWrapper>
		</Wrapper>
	);
};

Card.propTypes = {
	borderRadius: PropTypes.number,
};

Card.defaultProps = {
	borderRadius: 8,
};

export default Card;
