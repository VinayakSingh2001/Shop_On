import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import { useEffect, useState } from "react";
import axios from "axios";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space_between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/products?category=${cat}`
            : "http://localhost:3000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);



  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Products;
