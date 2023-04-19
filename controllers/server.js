// Requirement: Use Node.js and Express.js to create a RESTful API
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/send-email', async (req, res) => {
  try {
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        type: 'OAuth2',
        user: 'bernardoflora18@gmail.com',
        clientId: '202314130542-sd7sdp3qkdqi4mkon127i45avbb59lp9.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: 'YOUR_REFRESH_TOKEN',
        accessToken: 'YOUR_ACCESS_TOKEN'
      }
    });
    

    const mailOptions = {
      from: req.body.email,
      to: 'bernardoflora18@gmail.com',
      subject: `New Contact Message from ${req.body.name}`,
      html: `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    };

 
    const info = await transporter.sendMail(mailOptions);

 
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
  
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
