const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const AppError = require("./utils/appError");
const storiesRouter = require("./routes/storiesRoutes");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");
const app = express();

app.use(cors());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet());

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// 3) Routes : and Mounting the routers
app.use("/", viewRouter);

app.use("/api/v1/stories", storiesRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

// server
module.exports = app;
