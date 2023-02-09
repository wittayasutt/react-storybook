import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
`;

const Title = styled.h5`
	font-size: 20px;
	margin-bottom: 16px;
`;

const Subtitle = styled.p``;

const EmptyState = () => {
	return (
		<Wrapper>
			<Title>We couldn’t find any results</Title>
			<Subtitle>
				Please try to remove some filters or try other keywords.
			</Subtitle>
		</Wrapper>
	);
};

export default EmptyState;
