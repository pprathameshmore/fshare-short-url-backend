const express = require('express');

const app = express();
const { config } = require('../src/configs/index');

require('./loaders/index')(app);
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
