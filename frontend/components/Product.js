import ItemStyles from "./styles/ItemStyles";

export default function Product({ product, className }) {
	return (
			<ItemStyles>{ product.name }</ItemStyles>
		);
}