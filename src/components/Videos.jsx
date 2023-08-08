import { Stack, Box } from '@mui/material';
import React from 'react';
// eslint-disable-next-line import/no-cycle
import { VideoCard, ChannelCard, Loader } from './index';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={idx}>
          {item.type === 'video' && <VideoCard video={item} /> }
          {item.type === 'channel' && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
