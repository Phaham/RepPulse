import React from 'react';
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import HeroBannerImage from '../assets/images/banner.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' }
  })
};

const pulse = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
};

export default function HeroBanner() {
  const theme = useTheme();

  const scrollToExercises = (e) => {
    e.preventDefault();
    const el = document.getElementById('exercises');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      overflow: 'hidden', 
      background: theme.palette.grey[50],
      zIndex: 0 // Base z-index
    }}>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ 
        minHeight: '80vh', 
        px: { xs: 3, md: 8 }, 
        py: { xs: 6, md: 0 },
        position: 'relative',
        zIndex: 1 
      }}>
        {/* Text Content Column */}
        <Grid item xs={12} md={6} sx={{ 
          position: 'relative', 
          zIndex: 2 // Higher than image column
        }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
            <Typography component="div" sx={{ 
              color: theme.palette.error.main, 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: 1.2 
            }}>
              Fitness Club
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={0.2} variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              mt: 2, 
              lineHeight: 1.2, 
              fontSize: { xs: '2.5rem', md: '4rem' } 
            }}>
              Sweat, Smile <br /> And Repeat
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={0.4} variants={fadeIn}>
            <Typography variant="body1" sx={{ 
              mt: 3, 
              fontSize: { xs: '1rem', md: '1.25rem' }, 
              color: theme.palette.text.secondary 
            }}>
              Discover personalized workouts, track your progress, and stay motivated on your fitness journey.
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={0.6} variants={fadeIn}>
            <Box sx={{ mt: 4, position: 'relative', zIndex: 3 }}>
              <motion.div {...pulse}>
                <Button
                  component="a"
                  href="#exercises"
                  onClick={scrollToExercises}
                  variant="contained"
                  size="large"
                  sx={{ 
                    backgroundColor: theme.palette.error.main, 
                    px: 4, 
                    py: 1.5, 
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.error.dark
                    },
                    position: 'relative',
                    zIndex: 4
                  }}
                >
                  Explore Exercises
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} md={5} sx={{ 
          position: 'relative', 
          mt: { xs: 6, md: 0 },
          zIndex: 1 
        }}>
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: '-15%',
              right: { md: '-10%', xs: '0' },
              fontSize: '15rem',
              fontWeight: 900,
              color: theme.palette.error.main,
              opacity: 0.05,
              userSelect: 'none',
              lineHeight: 1,
              pointerEvents: 'none',
              zIndex: -1
            }}
          >
            EXERCISE
          </Typography>

          <motion.img
            src={HeroBannerImage}
            alt="Hero Banner"
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              transition: { duration: 1, ease: 'easeOut' } 
            }}
            style={{ 
              width: '100%', 
              borderTopLeftRadius: 80, 
              borderBottomLeftRadius: 80, 
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1 
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}