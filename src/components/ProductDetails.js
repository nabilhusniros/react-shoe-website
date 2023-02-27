import React from 'react'; 
import { useParams } from 'react-router-dom';
import { products } from './ProductPage'; 
import './ProductDetails.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const ProductDetails = () => {
   const params = useParams();
   const productList = products.filter((product) => product.id !== params.id).map (product =><React.Fragment>
      <div className="navbar">
			<Link to="/">
            <img className="logo" src="/shoestop.png" alt="ShoeStop Logo"></img>
            </Link>
		</div>
      <div className='container'>
         <div className='picture'>
         <img src={product.image} alt="Prodduct Shoe"></img>
         </div>
         <h2>{product.name}</h2>
         <p>RM {product.price} </p>
         <div className='text'>
         <p>{product.longdetails}</p>
         </div>
         <div className='size'>
         <h3>Choose Size</h3>
         <Box>
         <ButtonGroup variant="text" aria-label="text button group">
         <Button>UK 6</Button>
         <Button>UK 7</Button>
         <Button>UK 8</Button>
         <Button>UK 9</Button>
         <Button>UK 10</Button>
         <Button>UK 11</Button>
         </ButtonGroup>
         </Box>
         </div>
         <div className='details-button'>
         <button className='details-btn' style={{cursor: "not-allowed"}}>Add to cart</button>
         <Link to="/" style={{textDecoration: "none"}}>
         <button className='details-btn'>Buy</button>
         </Link>
         </div>
         <small>Build by Nabil Ros &copy;</small>
      </div>
      </React.Fragment>
   )
   
   return (
      <div>
         {productList} 
      </div>
   )
}

export default ProductDetails;