import './App.css';
import Layout from './components/Layout';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';

function App() {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
      <React.Fragment>
        <Tabs value={currentTabIndex} onChange={handleTabChange} centered>
          <Tab label='About'/>
          <Tab label='Projects'/>
          <Tab label='Skills'/>
          <Tab label='Contact'/>
        </Tabs>
        
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
          <About />
        </Box>
      )}
 
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <Projects />
        </Box>
      )}

      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <Skills />
        </Box>
      )}
 
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
          <Contact />
        </Box>
      )}
      </React.Fragment>
  );
}

export default App;