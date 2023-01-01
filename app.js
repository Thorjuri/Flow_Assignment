const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Router = require("./routes");
const errorHandlerMiddleware = require("./middlewares/error_handler_middleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    cors({
        origin: "*", 
        allowedHeaders: ["content-Type", "Authorization"],
        exposedHeaders: ["content-Type", "Authorization"],
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH", "OPTIONS"],
        credential: "true",
    })
);

app.options("*", cors());
app.use("/api", Router);
app.use(errorHandlerMiddleware);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.render("main");
}); 

app.listen(port, () => {
    console.log(`${port}번 포트로 서버 실행합니다`);
});
