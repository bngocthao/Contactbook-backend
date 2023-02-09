const express = require("express");
const cors = require("cors");

const app = express();
// Khai báo router
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// Tạo api để gọi
app.use("/api/contacts", contactsRouter);

module.exports = app;