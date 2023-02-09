import PropTypes from 'prop-types';
import Button from '../Button';

const ButtonSecondary = ({ children, size, fullWidth, onClick }) => {
	return (
		<Button
			color={'#252525'}
			backgroundColor={'transparent'}
			borderColor={'#000'}
			hoverBackgroundColor={'transparent'}
			hoverBorderColor={'#fd0'}
			size={size}
			fullWidth={fullWidth}
			onClick={onClick}>
			{children}
		</Button>
	);
};

ButtonSecondary.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fullWidth: PropTypes.bool,
	onClick: PropTypes.func,
};

ButtonSecondary.defaultProps = {
	children: <></>,
	size: 'medium',
	fullWidth: false,
	onClick: undefined,
};

export default ButtonSecondary;
