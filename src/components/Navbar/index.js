import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
	display: flex;
	justify-content: center;
	height: 80px;
	width: 100%;

	position: sticky;
	top: 0;

	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : '#ffffff'};
`;

const Container = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 1024px;
	padding: 0 16px;

	font-weight: 500;

	@media only screen and (min-width: 1024px) {
		padding: 0;
	}
`;

const LogoLink = styled.a`
	height: 32px;

	@media only screen and (min-width: 1024px) {
		height: 44px;
	}
`;

const Logo = styled.img`
	height: 100%;
`;

const SignIn = styled.div`
	cursor: pointer;

	&:hover {
		color: #eba614;
	}
`;

const Navbar = ({ backgroundColor }) => {
	return (
		<Wrapper backgroundColor={backgroundColor}>
			<Container>
				<LogoLink href='/'>
					<Logo src='site-logo.svg' alt='Site logo' />
				</LogoLink>
				<SignIn>Sign in</SignIn>
			</Container>
		</Wrapper>
	);
};

Navbar.propTypes = {
	backgroundColor: PropTypes.string,
};

Navbar.defaultProps = {
	backgroundColor: null,
};

export default Navbar;
