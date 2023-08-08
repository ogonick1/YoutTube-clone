import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {
  ChanelDetail, Feed, Navbar, SearchFeed, VideoDetail,
} from './components';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route exact path='/video/:id' element={<VideoDetail />} />
        <Route exact path='/channel/:id' element={<ChanelDetail />} />
        <Route exact path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
