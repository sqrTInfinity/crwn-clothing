import ProductCard from "../product-card/product-card.component";
import {
    CategoryPreviewContainer,
    Preview,
    Tittle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Tittle to={title}>{title.toUpperCase()}</Tittle>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
