import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

type ProductProps = {
  name: string;
  description: string;
  quantity: number;
  price: number;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProductCard({ name, description, quantity, price, onEdit, onDelete }: ProductProps) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3, overflow: 'hidden', margin: 'auto', my: 2 }}>
      <CardContent sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Quantity:</strong> {quantity}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Price:</strong> ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', paddingX: 2 }}>
        {/* Botón Edit */}
        <Button size="small" color="primary" variant="contained" onClick={onEdit}>
          Edit
        </Button>
        {/* Botón Delete */}
        <Button size="small" color="error" variant="contained" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
