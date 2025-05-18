import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function ModernSearchBar({ value, onChange, onSearch }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '400px', md: '600px' },
        mx: 'auto',
        mt: 4
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Exercises…"
        value={value}
        onChange={onChange}
        onKeyDown={e => {
          if (e.key === 'Enter') onSearch();
        }}
        sx={{
          bgcolor: '#fff',
          borderRadius: '50px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            paddingRight: 0
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon htmlColor={theme.palette.error.main} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={onSearch}
                sx={{
                  bgcolor: theme.palette.error.main,
                  '&:hover': { bgcolor: theme.palette.error.dark },
                  color: '#fff',
                  borderRadius: '50%',
                  p: 1
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
}
