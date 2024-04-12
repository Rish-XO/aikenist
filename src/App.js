// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Button, Card, CardContent, Typography } from '@mui/material';
import OfferModal from './modelComponents/OfferModel';

function App() {

const OfferCards = ["1", "2", "3"]

const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>Offers</h1>
    <div style={{ marginTop: '20px', maxWidth: '700px', width: '100%' }}>
      {OfferCards.map((offer, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card {offer} Title
              </Typography>
              <Typography variant="body2">
                This is a sample card content for Offer {offer}. You can put any text or components here.
              </Typography>
              <Button onClick={handleOpenModal}>Order details</Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
    <OfferModal open={openModal} handleClose={handleCloseModal} />
  </div>

  );
}

export default App;
