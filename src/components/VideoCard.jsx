import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl,
} from '../utils/constants';

const VideoCard = ({ video }) => {
  const {
    videoId, title, thumbnail, channelId, channelTitle, viewCount, publishedText,
  } = video;
  return (
    <Card
      sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}
    >
      <Link
        to={videoId ? `/Video/${videoId}` : demoVideoUrl}
      >
        <CardMedia
          image={thumbnail?.[0]?.url}
          alt={title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
        >
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#fff'
          >
            {
              title?.slice(0, 60)
              || demoVideoTitle.slice(0, 60)
            }
          </Typography>
        </Link>

        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' color='gray'>
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
        {publishedText
          && (
          <Typography variant='subtitle2' color='gray'>
            {publishedText || ''}
            {' '}
            <AccessTimeIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
            {' '}
          </Typography>
          )}
        <Typography variant='subtitle2' color='gray'>
          {viewCount || ''}
          {' '}
          <VisibilityIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
