import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

type ProductProps = {
  name: string;
  description: string;
  quantity: number;
  price: number;
};

export default function ProductCard({ name, description, quantity, price}: ProductProps) {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Quantity:</strong> {quantity}
          </Typography>
          <Typography variant="body1">
            <strong>Price:</strong> ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" >
          Edit
        </Button>
        <Button size="small" color="error" >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}