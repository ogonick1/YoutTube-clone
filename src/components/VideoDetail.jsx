/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  Typography, Box, Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Videos, Loader } from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video?id=${id}`)
      .then((data) => setVideoDetail(data));

    fetchFromAPI(`related?id=${id}`)
      .then((data) => setVideos(data.data));
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    channelId, title, channelTitle, description, viewCount,
  } = videoDetail;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ md: 'row', xs: 'column' }}>
        <Box flex={2}>
          <Box sx={{ width: '100%' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant='h6' color='#fff'>
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Typography variant='body1' sx={{ opacity: 0.7 }}>
                {parseInt(viewCount, 10).toLocaleString()}
                {' '}
                views
              </Typography>
            </Stack>
            <Stack direction='row' p={3} alignItems='center'>
              <Typography variant='body3' sx={{ opacity: 0.7, color: '#fff' }}>
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py='1' justifyContent='center' alignItems='center'>
          {{ videos } && <Videos videos={videos} direction='column' />}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
