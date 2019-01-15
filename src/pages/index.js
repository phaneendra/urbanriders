import React from 'react';
import VideoBackground from "../components/VideoBackground";
import { withSiteData } from 'react-static';

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to Urban Runners</h1>
    <VideoBackground />
  </div>
))
