import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from '../Navbar';
import Main from '../Main';

const Wrapper = styled.div``;

const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Navbar />
			<Main>{children}</Main>
		</Wrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

Layout.defaultProps = {
	children: <></>,
};

export default Layout;
