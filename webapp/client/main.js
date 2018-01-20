import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// BOOT
import '/imports/startup/client';
 
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('app-root'));
});
