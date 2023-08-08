/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, CardContent, CardMedia, Stack, Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { demoProfilePicture } from '../utils/constants';
import VideoCard from './VideoCard';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channel?id=${id}`);

      setChannelDetail(data.meta);
      setVideos(data.data);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height: '200px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
            marginTop: '-93px',
          }}
        >
          <CardMedia
            image={channelDetail?.thumbnail?.[2]?.url || demoProfilePicture}
            alt={channelDetail?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              margin: 'auto',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.title}
            {' '}
            <CheckCircleIcon sx={{ fontSize: '16px', color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.subscriberCount, 10).toLocaleString('en-US')}
              {' '}
              Subscribers
            </Typography>
          )}
          <Typography>
            {channelDetail?.description}
          </Typography>
        </CardContent>

      </Box>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='start'
        gap={2}
      >
        {videos.map((i, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={idx}>
            <VideoCard video={i} />
          </Box>
        ))}

      </Stack>
    </Box>
  );
};

export default ChannelDetail;
