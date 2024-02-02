

import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import { API } from 'aws-amplify';
import { onCreateProduct } from '../../../graphql/subscriptions';
import { listProducts } from '../../../graphql/queries';
import { createProduct, updateProduct, deleteProduct } from '../../../graphql/mutations';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const ItemList = ({ userRole }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: '',
    img: '', // Main image URL
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [imageIndices, setImageIndices] = useState([]); // Array to store image indices for each item
  const [multipleImagesInput, setMultipleImagesInput] = useState('');



  
  const handleNextImage = (index) => {
    setImageIndices((prevIndices) => [
      ...prevIndices.slice(0, index),
      (prevIndices[index] + 1) % items[index].img.split(',').length,
      ...prevIndices.slice(index + 1),
    ]);
  };

  const handlePrevImage = (index) => {
    setImageIndices((prevIndices) => [
      ...prevIndices.slice(0, index),
      (prevIndices[index] - 1 + items[index].img.split(',').length) % items[index].img.split(',').length,
      ...prevIndices.slice(index + 1),
    ]);
  };

  const handleAddImage = () => {
    if (newItem.img) {
      setItems((prevItems) => [...prevItems, { ...newItem }]);
      setImageIndices((prevIndices) => [...prevIndices, 0]); // Initialize index for the new item
      setNewItem({ ...newItem, img: '' });
    }
  };
  const handleWhatsAppClick = (itemName, itemDescription) => {
    const whatsappNumber = '+14243358829';
    const message = `Item Name: ${itemName}\nDescription: ${itemDescription}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappLink, '_blank');
  };
  const handleAddMultipleImages = () => {
    const newImages = multipleImagesInput.split(',').map((url) => url.trim()).filter(Boolean);

    const updatedImages = newItem.img ? `${newItem.img},${newImages.join(',')}` : newImages.join(',');

    setNewItem({ ...newItem, img: updatedImages });
    setMultipleImagesInput('');
  };

  const fetchProducts = async () => {
    try {
      const productData = await API.graphql({ query: listProducts });
      const productList = productData.data.listProducts.items;
      setItems(productList);
      // Initialize image indices for each item
      setImageIndices(productList.map(() => 0));
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    fetchProducts();

    const subscription = API.graphql({ query: onCreateProduct }).subscribe({
      next: ({ value }) => {
        const newProduct = value.data.onCreateProduct;
        setItems((prevItems) => [...prevItems, newProduct]);
        setImageIndices((prevIndices) => [...prevIndices, 0]);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAddItem = () => {
    createNewProduct({
      title: newItem.title,
      description: newItem.description,
      price: newItem.price,
      img: newItem.img,
    });

    setNewItem({ title: '', description: '', price: '', img: '' });
  };

  const createNewProduct = async (product) => {
    try {
      await API.graphql({
        query: createProduct,
        variables: { input: product },
      });

      fetchProducts();
    } catch (error) {
      console.error('Error creating product', error);
    }
  };

 

  const handleUpdateItem = async () => {
    try {
      const currentItem = items[selectedProductId];
  
      if (!currentItem) {
        console.error('Item not found for update');
        return;
      }
  
      const updatedProduct = await API.graphql({
        query: updateProduct,
        variables: {
          input: {
            id: currentItem.id, // Use the ID of the existing item for update
            ...newItem,
          },
        },
        // No need for a condition check in this case
      });
  
      const updatedItems = [...items];
      updatedItems[selectedProductId] = updatedProduct.data.updateProduct;
      setItems(updatedItems);
      setIsUpdating(false);
      setSelectedProductId(0);
      setImageIndices((prevIndices) => [...prevIndices.slice(0, selectedProductId), 0, ...prevIndices.slice(selectedProductId + 1)]);
      setNewItem({ title: '', description: '', price: '', img: '' });
    } catch (error) {
      console.error('Error updating product', error);
  
      // Handle specific error types
      if (error.errors && error.errors.length > 0) {
        const firstError = error.errors[0];
        if (firstError.errorType === 'DynamoDB:ConditionalCheckFailedException') {
          console.error('Conditional check failed. The item may have been modified by another process.');
        }
        // Handle other error types if needed
      }
    }
  };
  

  const handleEditItem = (index) => {
    setIsUpdating(true);
    setSelectedProductId(index);
    setNewItem({
      title: items[index].title,
      description: items[index].description,
      price: items[index].price,
      img: items[index].img,
    });
  };


  const handleDeleteItem = async (index, productId) => {
    try {
      await API.graphql({
        query: deleteProduct,
        variables: { input: { id: productId } },
      });
      const updatedItems = items.filter((item) => item.id !== productId);
      setItems(updatedItems);
      setImageIndices((prevIndices) => [...prevIndices.slice(0, index), ...prevIndices.slice(index + 1)]);
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const imgStyle = {
    objectFit: 'cover',
    height: '400px', // Set a fixed height for the images
  };

  return (
    <Container>
      <Typography style={{ fontSize: '2.125rem' }} variant="h3" textAlign="center" className="header" paddingTop="10%" color="#13c5a1">
        My Product
      </Typography>

      {/* <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt={item.title}
                style={imgStyle}
                image={item.img && item.img.split(',')[imageIndices[index]].trim()}
              />

{item.img && item.img.split(',').length > 1 && (
  <div style={{ paddingTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button onClick={() => handlePrevImage(index)} style={{ marginRight: '10px' }}>
      <ChevronLeftIcon />
    </Button>
    <span style={{ margin: '0 10px' }}>
       {imageIndices[index] + 1}/{item.img.split(',').length}
    </span>
    <Button onClick={() => handleNextImage(index)}>
      <ChevronRightIcon />
    </Button>
  </div>
)}

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
                  <Button onClick={() => handleEditItem(index)}>Edit</Button>
                )}
                <Button onClick={() => handleWhatsAppClick(item.title, item.description)}>
                  <WhatsAppIcon />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
 <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                alt={item.title}
                style={{ objectFit: 'cover', height: '400px' }}
                image={item.img && item.img.split(',')[imageIndices[index]].trim()}
              />

              {item.img && item.img.split(',').length > 1 && (
                <div style={{ paddingTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button onClick={() => handlePrevImage(index)} style={{ marginRight: '10px' }}>
                    <ChevronLeftIcon />
                  </Button>
                  <span style={{ margin: '0 10px' }}>
                    {imageIndices[index] + 1}/{item.img.split(',').length}
                  </span>
                  <Button onClick={() => handleNextImage(index)}>
                    <ChevronRightIcon />
                  </Button>
                </div>
              )}

              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="h5">${item.price}</Typography>
                {userRole === 'Manager' && (
                  <Button onClick={() => handleDeleteItem(index, item.id)}>Delete</Button>
                )}
                {userRole === 'Manager' && (
                  <Button onClick={() => handleEditItem(index)}>Edit</Button>
                )}
                <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                  <Button onClick={() => handleWhatsAppClick(item.title, item.description)}>
                    <WhatsAppIcon />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {userRole === 'Manager' && (
        <form style={{ paddingTop: '5%' }}>
          <Typography variant="h5">Add/Edit Item</Typography>
          <TextField
            label="Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Price (in dollars)"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            label="Main Image URL"
            value={newItem.img}
            onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Multiple Image URLs (comma-separated)"
            value={multipleImagesInput}
            onChange={(e) => setMultipleImagesInput(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleAddMultipleImages} variant="outlined" color="primary">
            Add Multiple Images
          </Button>

          {isUpdating ? (
            
            <Button onClick={handleUpdateItem} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Update Item
            </Button>
          ) : (
            <Button onClick={handleAddItem} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Add Item
            </Button>
          )}
        </form>
      )}
    </Container>
  );
};

export default ItemList;