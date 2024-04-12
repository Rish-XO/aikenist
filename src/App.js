// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import OfferModal from "./modelComponents/OfferModel";

function App() {
  const OfferCards = ["1", "2", "3"];

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Offers</h1>
      <div style={{ marginTop: "20px", maxWidth: "700px", width: "100%" }}>
        {OfferCards.map((offer, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    {/* Show image on the left side */}
                    <img
                      src="https://img.freepik.com/free-vector/creative-memphis-style-sale-price-tag-banner-design_1017-15630.jpg?w=1380&t=st=1712931701~exp=1712932301~hmac=02701032d3d4b8085aa8050c18d57863bbca87e8f21225101bae90c7abfcfab0"
                      alt="Offer"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    {/* Content */}
                    <Typography variant="h5" component="div">
                      Card {offer} Title
                    </Typography>
                    <Typography variant="body2">
                      This is a sample card content for Offer {offer}. You can
                      put any text or components here.
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  onClick={handleOpenModal}
                  variant="contained"
                  color="primary"
                >
                  Order details
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {/* Offer modal */}
      <OfferModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default App;
