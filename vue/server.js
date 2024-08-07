import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors()); // Enable CORS if the client is on a different origin
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    const { name, email, password, password_confirmation } = req.body;
    // Registration logic here
    res.status(200).json({ message: 'User registered successfully!' });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});n