import React from 'react';
import {Grid}from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
const products=[
    {id:1,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://images-na.ssl-images-amazon.com/images/I/31PxYpRDdrL._SX355_.jpg'},
    {id:2, name:'Book', description:'Books', price:'$10', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:3,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://images-na.ssl-images-amazon.com/images/I/31PxYpRDdrL._SX355_.jpg'},
    {id:4,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:5,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:6,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:7,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:8,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:9,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:10,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:11,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:12,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:13,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},
    {id:14,name:'Shoes', description:'Running Shoes', price:'$5', image:'https://cdn.shopify.com/s/files/1/0834/3901/collections/concern-uneven-1_240x.jpg?v=1547572045'},

];
const Products = () =>{
    const classes= useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
          {products.map((product)=>(
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>

              </Grid>
          ))}
        </Grid>
    </main>
    )
}
export default Products;