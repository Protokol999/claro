import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export const Main = () => {
  const [hovered, setHovered] = useState(null);

  const socials = [
    {
      name: 'Instagram',
      icon: <InstagramIcon sx={{ color: '#E1306C' }} />
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon sx={{ color: '#1877F2' }} />
    },
    {
      name: 'TikTok',
      icon: <MusicNoteIcon sx={{ color: '#000' }} />
    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        py: { xs: 4, md: 10 },
        px: { xs: 2, md: 10 },
        bgcolor: '#212121',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack
        spacing={4}
        alignItems='center'
        sx={{
          zIndex: 1
        }}
      >
        <Typography
          variant='h2'
          fontWeight='bold'
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
            lineHeight: 1.2,
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: '#fff',
            textTransform: 'uppercase'
          }}
        >
          ПРИВЛЕКАЕМ КЛИЕНТОВ ИЗ{' '}
          <Box
            component='span'
            sx={{ color: '#F8DB91', position: 'relative' }}
            onMouseEnter={() => setHovered('instagram')}
            onMouseLeave={() => setHovered(null)}
          >
            INSTAGRAM
            {hovered === 'instagram' && (
              <Box
                sx={{
                  position: 'absolute',
                  right: -60, // Отдаляем иконку еще правее
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0,
                  animation: 'fadeIn 0.5s forwards',
                  p: 0.5, // Небольшой внутренний отступ для "стилизации"
                  borderRadius: '50%', // Делаем фон круглым
                  bgcolor: 'rgba(255,255,255,0.1)', // Слегка прозрачный фон
                  boxShadow: '0 0 10px rgba(0,0,0,0.3)', // Небольшая тень
                  display: 'flex', // Для центрирования иконки внутри
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <InstagramIcon sx={{ fontSize: '3rem', color: '#E1306C' }} />
              </Box>
            )}
          </Box>
          ,
          <br />
          РАБОТАЕМ С{' '}
          <Box
            component='span'
            sx={{ color: '#44DD8D', position: 'relative' }}
            onMouseEnter={() => setHovered('facebook')}
            onMouseLeave={() => setHovered(null)}
          >
            FACEBOOK
            {hovered === 'facebook' && (
              <Box
                sx={{
                  position: 'absolute',
                  right: -60, // Отдаляем иконку еще правее
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0,
                  animation: 'fadeIn 0.5s forwards',
                  p: 0.5,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FacebookIcon sx={{ fontSize: '3rem', color: '#1877F2' }} />
              </Box>
            )}
          </Box>
          ,
          <br />
          ТАКЖЕ ПОМОГАЕМ
          <br />С РАСКРУТКОЙ АККАУНТОВ{' '}
          <Box
            component='span'
            sx={{ color: '#FF64C5', position: 'relative' }}
            onMouseEnter={() => setHovered('tiktok')}
            onMouseLeave={() => setHovered(null)}
          >
            TIK TOK
            {hovered === 'tiktok' && (
              <Box
                sx={{
                  position: 'absolute',
                  right: -60, // Отдаляем иконку еще правее
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0,
                  animation: 'fadeIn 0.5s forwards',
                  p: 0.5,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <MusicNoteIcon sx={{ fontSize: '3rem', color: '#000' }} />
              </Box>
            )}
          </Box>
          .
        </Typography>

        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.6,
            color: '#fff',
            display: 'none'
          }}
        >
          Привлекаем клиентов из{' '}
          {socials.map((social, index) => (
            <Box
              key={index}
              component='span'
              onMouseEnter={() => setHovered(social.name.toLowerCase())}
              onMouseLeave={() => setHovered(null)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                mx: { xs: 0.5, md: 1 },
                fontWeight: 600,
                display: 'inline-block',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {social.name}
              {hovered === social.name.toLowerCase() && (
                <Box
                  sx={{
                    position: 'absolute',
                    right: -60, // Отдаляем иконку еще правее
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: '0.3s ease',
                    opacity: 0,
                    animation: 'fadeIn 0.5s forwards',
                    p: 0.5,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box component='span' sx={{ fontSize: '3rem' }}>
                    {social.icon}
                  </Box>
                </Box>
              )}
            </Box>
          ))}
          с помощью эффективных рекламных стратегий.
        </Typography>
      </Stack>

      {/* Первая бегущая лента с анимацией */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          width: '300%',
          py: 2.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotate(-10deg)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontWeight: 'bold',
          fontSize: { xs: '1.6rem', md: '4rem' },
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          bgcolor: '#FB5923',
          color: '#fff',
          animation: 'marquee 15s linear infinite',
          zIndex: 0
        }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <Box key={i} sx={{ mx: { xs: 1, md: 3 } }}>
            <span>•</span> CLARO <span>•</span> TARGET <span>•</span> DESK
            DECORATOR <span>•</span> CABLE TAMER <span>•</span>
          </Box>
        ))}
      </Box>

      {/* Вторая лента, накрест, для фона */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          py: 2.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotate(10deg)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontWeight: 'bold',
          fontSize: { xs: '1.6rem', md: '4rem' },
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          bgcolor: 'transparent',
          color: 'rgba(255, 255, 255, 0.05)',
          zIndex: 0
        }}
      >
        <Box sx={{ mx: { xs: 1, md: 3 } }}>
          <span>•</span> CLARO <span>•</span> TARGET <span>•</span> DESK
          DECORATOR <span>•</span> CABLE TAMER <span>•</span>
        </Box>
      </Box>

      {/* Анимации */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0) rotate(-10deg); }
            100% { transform: translateX(-50%) rotate(-10deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-50%) scale(0.8); }
            to { opacity: 1; transform: translateY(-50%) scale(1); }
          }
        `}
      </style>
    </Box>
  );
};
