import ProductCard from "./ProductCard";
import './ProductList.css';

const ProductoLista = ({producto}) => {
    const handleBuy = (productoId) => {
        console.log (`Compra iniciada para el producto: ${productoId}`);
    };

    return (
        <div className="product-list">
            {producto.map (producto => (
                <ProductCard 
                key={producto.id}
                producto={producto}
                onCompra={handleBuy}/>
            ))}
        </div>
    );
};
export default ProductoLista;