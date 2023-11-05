import React, { useState } from 'react';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card ,CardMedia,CardContent,Typography,Button,TextField,}  from '@mui/material';
import { API } from "aws-amplify";
import { createProduct } from '../../../graphql/mutations';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', description: '', price: '', image: '' });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ title: '', description: '', price: '', image: '' });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEditItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };


  return (
    <>
     <Container>
    
     <Typography variant='h3' textAlign="center" className="header"
            paddingTop="10%" color="#13c5a1">My Product </Typography>
        
      
      <Grid container spacing={2}> 
      
      {items.map((item, index) => (
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