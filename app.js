const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const app = express();
// Khai báo router
const contactsRouter = require("./app/routes/contact.route");

// Tạo api để gọi
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

//handle 404 response 
app.use((req, res, next) => {
    // Code ở đây sẽ không chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware sử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

//define error hadling middleware last, after other app.use()and routes call
app.use((err, req, res, next) => {
    //middleware xử lý lỗi tập trung
    // trong cách đoạn code xử lý ở các route, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Servcer Error",
    });
});

module.exports = app;