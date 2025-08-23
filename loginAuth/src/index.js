const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const collection = require("./config"); 

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});


app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const existingUser = await collection.findOne({ name: username });
    if (existingUser) {
      return res.send("User already exists. Please choose a different username");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.create({
      name: username,
      password: hashedPassword
    });

    console.log(`User ${username} signed up successfully`);
    res.redirect('/'); 
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).send('Error signing up');
  }
});
app.post('/login', async (req, res) => {
try {
  const { username, password } = req.body;
  const user = await collection.findOne({ name: username });
   if (!user) return res.status(400).send('User not found');
  
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send('Incorrect password');

   res.render('home', { username: user.name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send('Error logging in');
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

