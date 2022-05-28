import express from 'express';
import mountainRoutes from '../../../modules/mountains/routes/mountains.routes';
import  { createMountain } from './routes/routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'For documentation go to /v1/api-docs!' });
})

// app.use(routes)
app.use('/mountains', mountainRoutes)

app.listen( 3033, () => {
    console.log( `Server is running on port 3033 at ${new Date()} ` );
})