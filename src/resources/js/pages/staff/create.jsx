import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Material UI importları
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Box, 
  Paper,
  Grid,
  Divider
} from '@mui/material';

function StaffCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    experience: '',
    startDate: '',
    salary: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yeni personel bilgileri:', formData);
    navigate('/staff');
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Yeni Personel Ekle
      </Typography>

      <Paper elevation={3}>
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
          {/* Kişisel Bilgiler */}
          <Typography variant="h6" gutterBottom>
            Kişisel Bilgiler
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ad"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Soyad"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-posta"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Telefon"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres"
                name="address"
                value={formData.address}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={2}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* İş Bilgileri */}
          <Typography variant="h6" gutterBottom>
            İş Bilgileri
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Pozisyon"
                name="position"
                value={formData.position}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Departman"
                name="department"
                value={formData.department}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Deneyim"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Başlangıç Tarihi"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Maaş"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/staff')}
            >
              İptal
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Kaydet
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default StaffCreate; 