import { Modal, Box, Typography, Button } from '@mui/material';

function OfferModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Offer Details
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Sample offer details go here.
        </Typography>
        <Button onClick={handleClose}>Order Now</Button>
      </Box>
    </Modal>
  );
}

export default OfferModal;
