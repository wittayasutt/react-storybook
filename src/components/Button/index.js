import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.primary {
		color: #252525;
		background-color: #fd0;
		border: 1px solid #fd0;

		&:hover {
			background-color: #ffee7f;
			border-color: #ffee7f;
		}
	}

	.secondary {
		color: #252525;
		background-color: transparent;
		border: 1px solid #000;

		&:hover {
			border-color: #fd0;
		}
	}

	.tertiary {
		color: #252525;
		background-color: #ffee7f;
		border: 1px solid #fd0;
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 42px;
	${(props) => props.fullWidth && 'width: 100%;'};
	padding: 8px;

	background-color: #ffffff;
	border-radius: ${(props) => `${props.borderRadius}px`};
	font-size: 16px;

	cursor: pointer;

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
`;

const ButtonComponent = ({ children, type, borderRadius, fullWidth }) => {
	return (
		<Wrapper>
			<Button
				className={type}
				borderRadius={borderRadius}
				fullWidth={fullWidth}>
				{children}
			</Button>
		</Wrapper>
	);
};

ButtonComponent.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	borderRadius: PropTypes.number,
	fullWidth: PropTypes.bool,
};

ButtonComponent.defaultProps = {
	children: <></>,
	type: 'primary',
	borderRadius: 4,
	fullWidth: false,
};

export default ButtonComponent;
