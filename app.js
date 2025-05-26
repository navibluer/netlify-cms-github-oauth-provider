import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import middleWarez from './index.js';
const port = process.env.PORT || 3000;

const app = express();

// Initial page redirecting to Github
app.get('/auth', middleWarez.auth);

// Callback service parsing the authorization token
// and asking for the access token
app.get('/callback', middleWarez.callback);

app.get('/success', middleWarez.success);
app.get('/', middleWarez.index);

app.listen(port, () => {
  console.log('Netlify CMS OAuth provider listening on port ' + port);
});
