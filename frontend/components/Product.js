import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import Link from "next/dist/client/link";

export default function Product({ product }) {
	return (
			<ItemStyles>
				<img src={product?.photo?.image?.publicUrlTransformed} 
					alt={product.name}
				/>

				<Title>
					<Link href={`/product/${product.id}`} >
						{product.name}
					</Link>
				</Title>
				<PriceTag>
					{product.price}
				</PriceTag>
			</ItemStyles>
		);
}