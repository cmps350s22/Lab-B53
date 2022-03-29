import express from 'express';
import router from './router.js'
import morgan from 'morgan'

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', router)


app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
})
