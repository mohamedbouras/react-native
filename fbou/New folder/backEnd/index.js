const express = require('express')
const port = 3000
const app = express()
const cors = require('cors')
const db = require('./database/index')
const userRoutes = require('./routes/Users')
const postRoutes = require('./routes/Posts')
const { getAll } = require('./controllers/Users');

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRoutes,postRoutes)
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
app.get('/api/users/getAll',(req,res)=>{
  getAll((err,result)=>{
      if(err){
          res.status(500).json(err)
      }
      else {
          res.status(200).json(result)
      }
  })
})

const CLIENT_ID = "971893768019-3noo5g4febitvslaf1qhnh4i6fpnge9j.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04rQiNJu5t0vCCgYIARAAGAQSNwF-L9IrHUXgsObrczQeH7yjScC4nkacy6kjWMS_8P5rr2PeFe3o9CUTVAcZBGo2-T6dtOEtJMM";
const oAuth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "medb0748@gmail.com",
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: oAuth2Client.getAccessToken(),
    
  },
});

const verificationCodeMap = new Map();

app.post("/forget-password-email", async (req, res) => {
  const { email } = req.body;
  getAll((err, users) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // Check if the requested email is present in the list of users
      const user = users.find((user) => user.user_email === email);
      if (!user) {
        res.status(400).send("Email not found");
        return;
      }

      // Generate verification code and send email
      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      const mailOptions = {
        from: "assilelabed1993@gmail.com",
        to: email,
        subject: "Reset Password Code",
        text: `Your reset password code is ${verificationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json("Email sent successfully");
          verificationCodeMap.set(email, verificationCode);
          console.log("Verification code for", email, "is", verificationCode);
        }
      });
    }
  });
});




app.post("/verify-code", (req, res) => {
  const { email, code } = req.body;
  console.log("email:", email);
  console.log("code:",typeof(Number(code)));
  const verificationCode = verificationCodeMap.get(email);
  console.log("verificationCode:",typeof(verificationCode) );
  if (verificationCode == Number(code)) {
    res.status(200).json("Code verified successfully");
  } else {
    res.status(400).json("Invalid code");
  }
});


app.listen(port,()=>{
    console.log('server connect')
})