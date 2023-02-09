import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 42px;
	min-width: 112px;
	${(props) => props.fullWidth && 'width: 100%;'};
	padding: 8px;

	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	border: 1px solid ${(props) => props.borderColor};
	border-radius: 4px;
	font-size: 16px;

	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.hoverBackgroundColor};
		border: 1px solid ${(props) => props.hoverBorderColor};
	}

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
`;

const Button = ({
	children,
	color,
	backgroundColor,
	borderColor,
	hoverBackgroundColor,
	hoverBorderColor,
	size,
	fullWidth,
	onClick,
}) => {
	return (
		<Wrapper
			color={color}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			hoverBackgroundColor={hoverBackgroundColor}
			hoverBorderColor={hoverBorderColor}
			size={size}
			fullWidth={fullWidth}
			onClick={onClick}>
			{children}
		</Wrapper>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fullWidth: PropTypes.bool,
	onClick: PropTypes.func,

	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	hoverBackgroundColor: PropTypes.string,
	hoverBorderColor: PropTypes.string,
};

Button.defaultProps = {
	children: <></>,
	size: 'medium',
	fullWidth: false,
	onClick: undefined,

	color: '#252525',
	backgroundColor: '#fd0',
	borderColor: '#fd0',
	hoverBackgroundColor: '#ffee7f',
	hoverBorderColor: '#ffee7f',
};

export default Button;
