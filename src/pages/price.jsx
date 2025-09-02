import { CheckCircle, FlashOn, Star } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';

const prices = [
  {
    title: 'Базовый',
    price: '99$ / месяц',
    features: [
      'Аудит рекламы',
      'Запуск кампании',
      'Отчет раз в месяц',
      'Консультация онлайн'
    ]
  },
  {
    title: 'Продвинутый',
    price: '199$ / месяц',
    features: [
      'Полный аудит',
      'Таргет по интересам',
      'Ретаргетинг',
      'Отчет раз в неделю',
      'Подбор креативов'
    ]
  },
  {
    title: 'Премиум',
    price: '399$ / месяц',
    features: [
      'Индивидуальная стратегия',
      'Запуск на нескольких платформах',
      'Аналитика 24/7',
      'Персональный менеджер',
      'Создание видео-контента'
    ]
  }
];

const extras = [
  'Создание креативов и баннеров',
  'Ведение социальных сетей',
  'Продвижение в TikTok, Instagram, Facebook',
  'Инфлюенсер-маркетинг',
  'SEO + контент-маркетинг'
];

const whyChooseUs = [
  { icon: <CheckCircle color='success' />, text: 'Прозрачная отчетность' },
  { icon: <Star color='warning' />, text: 'Лучшие практики маркетинга' },
  { icon: <FlashOn color='error' />, text: 'Быстрый запуск кампаний' }
];

const faqs = [
  {
    q: 'Сколько времени нужно, чтобы увидеть результат?',
    a: 'Обычно первые результаты таргетированной рекламы видны уже через 1–2 недели.'
  },
  {
    q: 'Вы работаете с небольшими бюджетами?',
    a: 'Да, мы подбираем стратегию под ваш бюджет и постепенно масштабируем кампании.'
  },
  {
    q: 'Можно ли заказать только аудит?',
    a: 'Конечно! Мы можем провести детальный аудит и дать рекомендации по улучшению.'
  },
  {
    q: 'Какие платформы вы используете?',
    a: 'Мы работаем с Facebook, Instagram, TikTok и другими популярными платформами.'
  },
  {
    q: 'Можно ли подключить несколько тарифов одновременно?',
    a: 'Да, наши тарифы гибкие и могут комбинироваться для достижения максимального эффекта.'
  }
];

export const Price = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', minHeight: '100vh', py: 8 }}>
      <Container maxWidth='lg'>
        {/* Заголовок */}
        <Typography
          variant='h3'
          align='center'
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'white' }}
        >
          Тарифы и возможности
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          sx={{ mb: 6, color: 'gray' }}
        >
          Выберите подходящий тариф и получите максимум от таргетированной
          рекламы
        </Typography>

        {/* Тарифы */}
        <Grid container spacing={4} mb={12}>
          {prices.map((plan, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: 6,
                    background: 'linear-gradient(135deg, #2a2a2a, #333333)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      background:
                        'linear-gradient(135deg, #FF8C00, #FF0080, #8A2BE2)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant='h5' gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
                      {plan.price}
                    </Typography>
                    <ul style={{ paddingLeft: 16 }}>
                      {plan.features.map((feat, i) => (
                        <li key={i}>
                          <Typography variant='body1'>{feat}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      variant='contained'
                      size='large'
                      sx={{
                        borderRadius: 5,
                        px: 4,
                        backgroundColor: '#ff9800',
                        '&:hover': { backgroundColor: '#e68900', scale: 1.05 }
                      }}
                    >
                      Выбрать
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Почему выбирают нас */}
        <Box textAlign='center' mb={8}>
          <Typography
            variant='h4'
            gutterBottom
            fontWeight='bold'
            sx={{ color: 'white' }}
          >
            Почему выбирают нас ✨
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            {whyChooseUs.map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      boxShadow: 3,
                      background: 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <Box mb={1} fontSize={36}>
                      {item.icon}
                    </Box>
                    <Typography sx={{ color: 'white' }}>{item.text}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Дополнительные услуги */}
        <Box textAlign='center' mb={8}>
          <Typography
            variant='h4'
            gutterBottom
            fontWeight='bold'
            sx={{ color: 'white' }}
          >
            Дополнительные услуги 🚀
          </Typography>
          <Grid container spacing={2}>
            {extras.map((extra, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      background: 'rgba(0,0,0,0.05)',
                      boxShadow: 2,
                      textAlign: 'center'
                    }}
                  >
                    <Typography sx={{ color: 'white' }}>{extra}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ */}
        <Box>
          <Divider sx={{ mb: 6, backgroundColor: '#FF8C00' }} />
          <Typography
            variant='h4'
            gutterBottom
            textAlign='center'
            fontWeight='bold'
            sx={{ color: 'white' }}
          >
            Часто задаваемые вопросы ❓
          </Typography>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  '&:before': { display: 'none' }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                >
                  <Typography variant='subtitle1' fontWeight='bold'>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
