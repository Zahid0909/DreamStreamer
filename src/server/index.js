import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dream_streamer',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Hardcoded admin credentials
const hardcodedAdmin = {
  email: 'XahidUvais2002@gmail.com',
  password: bcrypt.hashSync('20020909', 10), // Hash the password
  role: 'admin',
};

// User Login API
app.post('/api/login', (req, res) => {
  const { email, password, role } = req.body;

  if (email === hardcodedAdmin.email && role === hardcodedAdmin.role) {
    bcrypt.compare(password, hardcodedAdmin.password, (err, isMatch) => {
      if (err) return res.status(500).send('Server error');
      if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid password' });

      const token = jwt.sign({ email: hardcodedAdmin.email, role: hardcodedAdmin.role }, 'your_jwt_secret', { expiresIn: '1h' });
      return res.json({ success: true, token, user: hardcodedAdmin });
    });
  } else {
    const query = 'SELECT * FROM users WHERE email = ? AND new_role = ?';
    db.query(query, [email, role], (err, results) => {
      if (err) return res.status(500).send('Server error');
      if (results.length === 0) return res.status(401).json({ success: false, message: 'Invalid email or role' });

      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).send('Server error');
        if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid password' });

        const token = jwt.sign({ id: user.id, role: user.new_role }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.json({ success: true, token, user });
      });
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
