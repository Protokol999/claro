import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // TikTok
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar
} from '@mui/material';
import { useState } from 'react';
import { logo } from '../assets/index';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = state => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О нас ', href: '/about' },
    { label: 'Цена', href: '/price' },
    { label: 'Контакты', href: '/contacts' }
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon sx={{ fontSize: 30 }} />,
      href: 'https://instagram.com',
      hoverColor: '#E1306C'
    },
    {
      icon: <FacebookIcon sx={{ fontSize: 30 }} />,
      href: 'https://facebook.com',
      hoverColor: '#1877F2'
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 30 }} />,
      href: 'https://tiktok.com'
    }
  ];

  return (
    <>
      <AppBar
        sx={{
          padding: '20px 60px',
          background: '#212121', // черный фон
          position: 'static',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* ЛОГО */}
          <Link href='/' underline='none'>
            <Box
              component='img'
              src={logo}
              alt='Logo'
              sx={{ height: 60, cursor: 'pointer' }}
            />
          </Link>

          {/* МЕНЮ */}
          <Stack
            sx={{
              color: '#fff',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
            direction='row'
            spacing={5}
          >
            {navLinks.map(item => (
              <Link
                key={item.label}
                href={item.href}
                sx={{
                  fontSize: '18px',
                  color: '#fff',
                  padding: '15px 30px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '2px',
                    width: '0%',
                    backgroundColor: '#fff',
                    transition: 'width 0.6s ease'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* СОЦСЕТИ */}
          <Stack
            direction='row'
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {socialLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target='_blank'
                rel='noopener'
                sx={{
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.3s ease, transform 0.2s ease',
                  '&:hover': {
                    color: item.hoverColor,
                    transform: 'scale(1.2)'
                  }
                }}
              >
                {item.icon}
              </Link>
            ))}
          </Stack>

          {/* БУРГЕР МЕНЮ */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer для мобилки */}
      <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: '100%',
            padding: 2,
            textAlign: 'center',
            alignItems: 'center',
            background: '#212121' // чёрный фон в мобильном меню
          }}
        >
          <List>
            {navLinks.map(item => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component='a'
                  href={item.href}
                  onClick={toggleDrawer(false)}
                  sx={{ color: '#fff' }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{ textAlign: 'center', fontSize: '18px' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Соцсети в мобильном меню */}
            <ListItem>
              <Stack
                direction='row'
                spacing={3}
                sx={{ justifyContent: 'center', width: '100%' }}
              >
                {socialLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    target='_blank'
                    rel='noopener'
                    sx={{
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'color 0.3s ease, transform 0.2s ease',
                      '&:hover': {
                        color: item.hoverColor,
                        transform: 'scale(1.2)'
                      }
                    }}
                  >
                    {item.icon}
                  </Link>
                ))}
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
