import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import { API } from 'aws-amplify';
import { onCreateProduct } from '../../../graphql/subscriptions';
import { listProducts } from '../../../graphql/queries';
import { createProduct, updateProduct, deleteProduct } from '../../../graphql/mutations';

const ItemList = ({ userRole }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', description: '', price: '', img: '' });
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await API.graphql({ query: listProducts });
        const productList = productData.data.listProducts.items;
        setItems(productList);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();

    // Set up a subscription for real-time updates when a new product is created
    const subscription = API.graphql({ query: onCreateProduct }).subscribe({
      next: (productData) => {
        const newProduct = productData.value.data.onCreateProduct;
        setItems([...items, newProduct]);
      },
    });

    // Unsubscribe from the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [items]);

  const handleAddItem = () => {
    createNewProduct({
      title: newItem.title,
      description: newItem.description,
      price: newItem.price,
      img: newItem.img,
    });

    // Clear the newItem form
    setNewItem({ title: '', description: '', price: '', img: '' });
  };

  const createNewProduct = async (product) => {
    try {
      await API.graphql({
        query: createProduct,
        variables: { input: product },
      });
    } catch (error) {
      console.error('Error creating product', error);
    }
  };

  const handleUpdateItem = async (index) => {
    try {
      const updatedProduct = await API.graphql({
        query: updateProduct,
        variables: { input: { id: selectedProductId, ...newItem } },
      });

      const updatedItems = [...items];
      updatedItems[index] = updatedProduct.data.updateProduct;
      setItems(updatedItems);
      setIsUpdating(false);
      setSelectedProductId('');
      setNewItem({ title: '', description: '', price: '', img: '' });
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  const handleDeleteItem = async (index, productId) => {
    try {
      await API.graphql({
        query: deleteProduct,
        variables: { input: { id: productId } },
      });
      const updatedItems = items.filter((item) => item.id !== productId);
      setItems(updatedItems);
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleEditItem = (item) => {
    setIsUpdating(true);
    setSelectedProductId(item.id);
    setNewItem({
      title: item.title,
      description: item.description,
      price: item.price,
      img: item.img,
    });
  };
  const cardStyle = {
    height: '100%', // Set the card height to 100%
    display: 'flex',
    flexDirection: 'column',
  };
  
  const imgStyle = {
    objectFit: 'cover', // Ensure the image covers the entire CardMedia area
    height: '100%', // Set the image height to 100%
  };
  return (
    <>
      <Container>
        <Typography style={{fontSize: '2.125rem',}} variant="h3" textAlign="center" className="header" paddingTop="10%" color="#13c5a1">
          My Product
        </Typography>

        <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card style={cardStyle}>
              <CardMedia component="img" alt={item.title} style={imgStyle} image={item.img} />
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h6">{item.title}</Typography>
  <Typography variant="body2" color="textSecondary">
    {item.description}
  </Typography>
  <Typography variant="h5">${item.price}</Typography>
  {userRole === 'Manager' && (
    <Button onClick={() => handleDeleteItem(index, item.id)}>Delete</Button>
  )}
  {userRole === 'Manager' && (
    <Button onClick={() => handleEditItem(item)}>Edit</Button>
  )}
</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {userRole === 'Manager' && (
        <form style={{paddingTop:'5%'}}>
        <TextField
          label="Title"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <TextField
          label="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <TextField
          label="Price (in dollars)"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <TextField
          label="Image URL"
          value={newItem.img}
          onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
        />
        {isUpdating ? (
          <Button onClick={() => handleUpdateItem(selectedProductId)}>Update Item</Button>
        ) : (
          <Button onClick={handleAddItem}>Add Item</Button>
        )}
      </form>
      )}
        
      </Container>
    </>
  );
};

export default ItemList;



/**
 *         {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={item.title}
                height="200"
                image={item.image}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="h5">${item.price}</Typography>
                <Button onClick={() => handleDeleteItem(index)}>Delete</Button>
               
                </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
    
          <form>
            <TextField
              label="Title"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            />
            <TextField
              label="Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
            <TextField
              label="Price (in dollars)"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <TextField
              label="Image URL"
              value={newItem.image}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            />
            <Button onClick={handleAddItem}>Add Item</Button>
          </form>
 */