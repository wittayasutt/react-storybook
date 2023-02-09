import Layout from './components/Layout';
import ProductList from './components/ProductList';
import ProductListEmptyState from './components/ProductList/empty';
import ProductItem from './components/ProductItem';

const App = () => {
	const hasItems = true;

	return (
		<Layout>
			{hasItems ? (
				<ProductList>
					{[...Array(6).keys()].map((index) => (
						<ProductItem key={index} />
					))}
				</ProductList>
			) : (
				<ProductListEmptyState />
			)}
		</Layout>
	);
};

export default App;
