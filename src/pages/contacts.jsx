import emailjs from '@emailjs/browser';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Send,
  Twitter,
  WhatsApp
} from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useJsApiLoader } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  border: '1px solid #444'
};

const center = {
  lat: 47008524, // Широта Кишинёва
  lng: 28846685 // Долгота Кишинёва
};

export const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: ''
  });
  const [success, setSuccess] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' //
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSuccess(true);
        setForm({ name: '', email: '', message: '', subject: '', phone: '' });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const socials = [
    { icon: <Facebook />, link: 'https://facebook.com' },
    { icon: <Instagram />, link: 'https://instagram.com' },
    { icon: <Twitter />, link: 'https://twitter.com' },
    { icon: <LinkedIn />, link: 'https://linkedin.com' },
    { icon: <WhatsApp />, link: 'https://wa.me/123456789' }
  ];

  const contactDetails = [
    { label: 'Телефон', value: '+373 123 456 789' },
    { label: 'Email', value: 'info@company.com' },
    { label: 'Адрес', value: 'Кишинёв, Молдова' }
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialIconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.2 }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#212121',
        color: '#e0e0e0',
        minHeight: '100vh',
        py: { xs: 8, md: 12 }
      }}
    >
      <Container maxWidth='md'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={headingVariant}
        >
          <Typography
            variant='h3'
            component='h1'
            align='center'
            gutterBottom
            sx={{
              fontWeight: 'bold',
              letterSpacing: { xs: '1px', md: '2px' },
              background: 'linear-gradient(45deg, #f06, #9f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Свяжитесь с нами
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            sx={{ mb: { xs: 4, md: 8 }, color: '#b0b0b0' }}
          >
            Отправьте сообщение, и мы ответим в ближайшее время.
          </Typography>
        </motion.div>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Alert
              severity='success'
              sx={{ mb: 3, backgroundColor: '#333', color: '#e0e0e0' }}
            >
              Сообщение успешно отправлено!
            </Alert>
          </motion.div>
        )}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'start'
          }}
        >
          {/* Contact Details and Socials */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            <Box>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#fff' }}
              >
                Наши контакты
              </Typography>
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: i * 0.15 }
                  }}
                >
                  <Typography variant='body1' sx={{ color: '#b0b0b0', mt: 1 }}>
                    <strong>{item.label}:</strong> {item.value}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            {/* Карта */}
            <Box mt={4}>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#fff' }}
              >
                Наше местоположение
              </Typography>
              {isLoaded ? (
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5861311018676!2d28.846248357932172!3d47.008490948197306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dc0e272d1bf%3A0x8258bfb1087af082!2sBlaga%20Construct!5e1!3m2!1sru!2s!4v1756816120690!5m2!1sru!2s'
                  width='500'
                  height='400'
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              ) : (
                <Box
                  sx={{
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#b0b0b0'
                  }}
                >
                  <Typography>Загрузка карты...</Typography>
                </Box>
              )}
            </Box>

            <Box>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#fff' }}
              >
                Социальные сети
              </Typography>
              <Box sx={{ mt: 1 }}>
                {socials.map((social, i) => (
                  <motion.div
                    key={i}
                    variants={socialIconVariant}
                    whileHover='hover'
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <IconButton
                      component={Link}
                      href={social.link}
                      target='_blank'
                      sx={{
                        color: '#b0b0b0',
                        '&:hover': {
                          color: '#fff',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Form */}
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            {['Имя', 'Email', 'Телефон', 'Тема'].map((label, i) => (
              <motion.div key={i} variants={formItemVariant}>
                <TextField
                  label={label}
                  name={label.toLowerCase()}
                  type={label === 'Email' ? 'email' : 'text'}
                  value={form[label.toLowerCase()]}
                  onChange={handleChange}
                  fullWidth
                  variant='outlined'
                  required={label === 'Имя' || label === 'Email'}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#2a2a2a',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: '#444'
                      },
                      '&:hover fieldset': {
                        borderColor: '#9f6'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#f06'
                      }
                    },
                    '& .MuiInputBase-input': {
                      color: '#e0e0e0'
                    },
                    '& .MuiInputLabel-root': {
                      color: '#888'
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#f06'
                    }
                  }}
                />
              </motion.div>
            ))}
            <motion.div variants={formItemVariant}>
              <TextField
                label='Сообщение'
                name='message'
                value={form.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={5}
                variant='outlined'
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#2a2a2a',
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: '#444'
                    },
                    '&:hover fieldset': {
                      borderColor: '#9f6'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#f06'
                    }
                  },
                  '& .MuiInputBase-input': {
                    color: '#e0e0e0'
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888'
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#f06'
                  }
                }}
              />
            </motion.div>
            <motion.div
              variants={formItemVariant}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type='submit'
                variant='contained'
                size='large'
                fullWidth
                endIcon={<Send />}
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg, #f06, #9f6)',
                  color: '#fff',
                  borderRadius: 2,
                  py: 1.5,
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(255, 0, 128, 0.4)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 0, 128, 0.6)'
                  }
                }}
              >
                Отправить
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
