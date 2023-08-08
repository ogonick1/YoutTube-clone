import React from 'react';
import {
  Box, CardContent, CardMedia, Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channel }) => {
  const {
    title, thumbnail, channelId, subscriberCount,
  } = channel;
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={thumbnail?.[1]?.url || demoProfilePicture}
            alt={title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant='h6'>
            {title}
            {' '}
            <CheckCircleIcon sx={{ fontSize: '16px', color: 'gray', ml: '5px' }} />
          </Typography>
          {subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(subscriberCount, 10).toLocaleString('en-US')}
              {' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
