import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Lightbulb,
  Rocket,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';

// Анимации
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
});

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    rotate: [-1, 1, -1, 0],
    transition: { duration: 0.5 }
  }
};

export const About = () => {
  const items = [
    {
      icon: <Users size={40} color='#FF8C00' />,
      title: '👥 Наша команда',
      text: 'Мы — команда маркетологов, дизайнеров, аналитиков и разработчиков, объединённых одной целью: делать бизнес клиентов заметным и успешным.'
    },
    {
      icon: <Rocket size={40} color='#FF0080' />,
      title: '🚀 Миссия',
      text: 'Наша миссия — помогать компаниям расти, внедряя современные инструменты и создавая кампании, которые приносят реальный результат.'
    },
    {
      icon: <Lightbulb size={40} color='#8A2BE2' />,
      title: '💡 Идеи',
      text: 'Мы верим, что каждая идея должна выделяться ✨. Поэтому наши проекты всегда креативные, современные и основанные на понимании аудитории.'
    }
  ];

  const partners = [
    {
      icon: <Briefcase size={36} color='#00BFFF' />,
      title: '🏪 Малый и средний бизнес',
      text: 'Помогаем локальным компаниям привлекать новых клиентов и увеличивать продажи 📈.'
    },
    {
      icon: <TrendingUp size={36} color='#32CD32' />,
      title: '🏢 Крупные бренды',
      text: 'Сотрудничаем с компаниями федерального уровня, создавая масштабные рекламные кампании для миллионов пользователей.'
    },
    {
      icon: <Users size={36} color='#FFD700' />,
      title: '🌱 Стартапы',
      text: 'Поддерживаем стартапы на ранних этапах, помогая быстро выйти на рынок 🚀.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Успешных кампаний 🎯' },
    { number: '120+', label: 'Довольных клиентов 😊' },
    { number: '10 лет', label: 'Опыта в маркетинге 📊' }
  ];

  const reviews = [
    {
      name: 'Алексей',
      text: 'Отличная команда! Благодаря таргету мы увеличили продажи на 40%. 🔥',
      emoji: '⭐️⭐️⭐️⭐️⭐️'
    },
    {
      name: 'Марина',
      text: 'Очень креативный подход! Видно, что любят своё дело ❤️',
      emoji: '⭐️⭐️⭐️⭐️⭐️'
    },
    {
      name: 'Иван',
      text: 'Помогли вывести наш стартап на рынок за 2 месяца 🚀',
      emoji: '⭐️⭐️⭐️⭐️⭐️'
    }
  ];

  return (
    <Box
      sx={{
        py: 12,
        background: '#212121',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Фоновые "плавающие" круги */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255,140,0,0.1)'
        }}
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'rgba(138,43,226,0.1)'
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <Container maxWidth='lg'>
        {/* Заголовок */}
        <motion.div {...fadeInUp(0)}>
          <Typography
            variant='h2'
            fontWeight='bold'
            textAlign='center'
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #FF8C00, #FF0080, #8A2BE2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ✨ О нас
          </Typography>
          <Typography
            variant='h6'
            textAlign='center'
            color='rgba(255,255,255,0.8)'
            mb={10}
          >
            Мы помогаем бизнесу расти 📈 с помощью креативного маркетинга,
            инновационных идей 💡 и современных инструментов 🚀
          </Typography>
        </motion.div>

        {/* Основные блоки */}
        <Grid container spacing={5} mb={12}>
          {items.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div {...fadeInUp(i * 0.2)} {...hoverEffect}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    textAlign: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    '&:hover': {
                      background:
                        'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(138,43,226,0.15))'
                    }
                  }}
                >
                  <Box mb={2}>{item.icon}</Box>
                  <CardContent>
                    <Typography
                      variant='h5'
                      fontWeight='bold'
                      color='#fff'
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography color='rgba(255,255,255,0.7)'>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* С кем мы работаем */}
        <motion.div {...fadeInUp(0.2)}>
          <Divider
            sx={{
              mb: 10,
              background: 'linear-gradient(90deg, #FF8C00, #FF0080, #8A2BE2)',
              height: '3px',
              borderRadius: '10px'
            }}
          />
          <Typography
            variant='h3'
            fontWeight='bold'
            textAlign='center'
            gutterBottom
            sx={{ color: '#fff' }}
          >
            🤝 С кем мы работаем
          </Typography>
        </motion.div>

        <Grid container spacing={5} mb={12}>
          {partners.map((partner, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div {...fadeInUp(i * 0.3)} {...hoverEffect}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    textAlign: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                >
                  <Box mb={2}>{partner.icon}</Box>
                  <CardContent>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                      color='#fff'
                      gutterBottom
                    >
                      {partner.title}
                    </Typography>
                    <Typography color='rgba(255,255,255,0.7)'>
                      {partner.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Цифры и факты */}
        <Grid container spacing={5} mb={12}>
          {stats.map((stat, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div {...fadeInUp(i * 0.2)}>
                <Typography
                  variant='h3'
                  fontWeight='bold'
                  textAlign='center'
                  color='#FF8C00'
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant='h6'
                  textAlign='center'
                  color='rgba(255,255,255,0.8)'
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Отзывы клиентов */}
        <Typography
          variant='h3'
          fontWeight='bold'
          textAlign='center'
          gutterBottom
          sx={{ color: '#fff', mb: 6 }}
        >
          💬 Отзывы клиентов
        </Typography>
        <Grid container spacing={5}>
          {reviews.map((review, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div {...fadeInUp(i * 0.3)} {...hoverEffect}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    textAlign: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                >
                  <Star color='#FFD700' />
                  <Typography
                    color='rgba(255,255,255,0.8)'
                    sx={{ mt: 2, mb: 2 }}
                  >
                    "{review.text}"
                  </Typography>
                  <Typography fontWeight='bold' color='#fff'>
                    {review.name}
                  </Typography>
                  <Typography color='#FFD700'>{review.emoji}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
