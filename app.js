// Dependencies
const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const app = express();

// Config
const { routes, port } = require('./config.json');

app.use(morgan('dev'));

for (route of routes) {
    app.use(route.route,
        proxy({
            target: route.address,
            pathRewrite: (path, req) => {
                return path.split('/').slice(2).join('/'); 
            }
        })
    );
}

app.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
});