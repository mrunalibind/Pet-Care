const express = require("express");
const { connection } = require("./config/db");
const { userRoutes } = require('./Routes/user.routes')
require("dotenv").config();
const { doctorRouter } = require("./Routes/doctor.routes");
const { setupSocket } = require('./socket');
const cors = require('cors');
const passport = require("passport")
const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
const server = require('http').createServer(app);


setupSocket(server);

const nodemailer = require("nodemailer");

app.post("/send-email", async (req, res) => {
    const { name,surname,email, date, time } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "petcare893@gmail.com",
            pass: process.env.mailPass
        }
    })
    const mailOptions = {
        from: 'petcare893@gmail.com',
        to: email,
        subject: 'Appointment Confirmation',
        text: `${name} ${surname} your appointment is scheduled for ${date} at ${time}.`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }

})



app.get('/', async (req, res) => {
    try {
        res.send("welcome to home page")
    } catch (error) {
        console.log(error)
    }
})
app.use("/doctor", doctorRouter)

app.use('/', userRoutes)
// 1) userRoutes
// 2) doctor Routes



server.listen(process.env.PORT, async () => {
    try {
        connection;
        console.log("connected to DB");
        console.log("server is running");
    } catch (err) {
        throw new Error("failed to connect");
    }
})
