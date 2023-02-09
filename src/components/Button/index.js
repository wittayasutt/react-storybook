import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.primary {
		color: ${(props) => props.theme.color.black};
		background-color: ${(props) => props.theme.color.bananaYellow};
		border: 1px solid ${(props) => props.theme.color.bananaYellow};

		&:hover {
			background-color: ${(props) => props.theme.color.bananaYellowLight};
			border-color: ${(props) => props.theme.color.bananaYellowLight};
		}
	}

	.secondary {
		color: ${(props) => props.theme.color.black};
		background-color: transparent;
		border: 1px solid ${(props) => props.theme.color.blackAbsolute};

		&:hover {
			border-color: ${(props) => props.theme.color.bananaYellow};
		}
	}

	.tertiary {
		color: ${(props) => props.theme.color.black};
		background-color: ${(props) => props.theme.color.bananaYellowLight};
		border: 1px solid ${(props) => props.theme.color.bananaYellow};
	}

	.small {
		height: 32px;
		min-width: 80px;
		font-size: 14px;
	}

	.medium {
		height: 40px;
		min-width: 112px;
		font-size: 16px;
	}

	.large {
		height: 48px;
		min-width: 136px;
		font-size: 18px;
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	${(props) => props.fullWidth && 'width: 100%;'};
	padding: 8px;
	border-radius: 4px;

	cursor: pointer;

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
`;

const ButtonComponent = ({ label, variant, size, fullWidth, onClick }) => {
	return (
		<Wrapper>
			<Button
				className={[variant, size].join(' ')}
				size={size}
				fullWidth={fullWidth}
				onClick={onClick}>
				{label}
			</Button>
		</Wrapper>
	);
};

ButtonComponent.propTypes = {
	label: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fullWidth: PropTypes.bool,
	onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
	variant: 'primary',
	size: 'medium',
	fullWidth: false,
	onClick: undefined,
};

export default ButtonComponent;
