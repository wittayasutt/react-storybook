import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
	display: flex;
	justify-content: center;

	min-height: calc(100vh - 40px);

	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : props.theme.color.white};
`;

const Container = styled.div`
	flex: 1;
	max-width: 1024px;
`;

const Main = ({ children, backgroundColor }) => {
	return (
		<Wrapper backgroundColor={backgroundColor}>
			<Container>{children}</Container>
		</Wrapper>
	);
};

Main.propTypes = {
	children: PropTypes.node,
	backgroundColor: PropTypes.string,
};

Main.defaultProps = {
	children: <></>,
	backgroundColor: null,
};

export default Main;
