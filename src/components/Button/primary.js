import PropTypes from 'prop-types';
import Button from '../Button';

const ButtonPrimary = ({ children, size, fullWidth, onClick }) => {
	return (
		<Button
			color={'#252525'}
			backgroundColor={'#fd0'}
			borderColor={'#fd0'}
			hoverBackgroundColor={'#ffee7f'}
			hoverBorderColor={'#ffee7f'}
			size={size}
			fullWidth={fullWidth}
			onClick={onClick}>
			{children}
		</Button>
	);
};

ButtonPrimary.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fullWidth: PropTypes.bool,
	onClick: PropTypes.func,
};

ButtonPrimary.defaultProps = {
	children: <></>,
	size: 'medium',
	fullWidth: false,
	onClick: undefined,
};

export default ButtonPrimary;
