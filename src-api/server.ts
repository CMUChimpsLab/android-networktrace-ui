import app from './app';
import compression from 'compression';
import helmet from 'helmet';

app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());

app.disable('x-powered-by');

const server = app.listen(process.env.PORT || 8081, () =>
    console.log('Starting ExpressJS API server on Port 8081'));

export default server;
