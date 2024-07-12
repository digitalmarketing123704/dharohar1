// // Registration Form

// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');

// const app = express();
// const corsOptions = {
//     // origin: ['http://127.0.0.1:5501/'],
//     origin: '*',
//     optionsSuccessStatus: 200 // For legacy browser support

// };
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // replace with your MySQL root password
//     database: 'Dharohar'
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to database');
// });

// app.post('/register', async (req, res) => {
//     console.log('text');
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//         return res.status(400).send('All fields are required');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = { username, email, password: hashedPassword };

//     const sql = 'INSERT INTO login SET ?';
//     db.query(sql, user, (err, result) => {
//         if (err) throw err;
//         console.log('User registered successfully', result);
//         res.send('User registered successfully');
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
