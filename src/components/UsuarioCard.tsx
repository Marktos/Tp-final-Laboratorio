import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

type UserProps = {
  email: string;
  role: string;
};

export default function UserCard({ email, role }: UserProps) {
    

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', my: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {email}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Role:</strong> {role}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}