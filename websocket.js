require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const workoutRoutes = require("./routes/workouts");
const socketIo = require("socket.io");

//middleware
app.use(express.json());
app.use(express.static(`${process.cwd()}/website`));
app.use(bodyParser.json({ limit: "1000mb" }));
app.set("trust proxy", true);
app.use((request, res, next) => {
  console.log(request.path, request.method);
  next();
});
app.use("/api/workouts", workoutRoutes);
//router
app.get("/", (request, res) => {
  //res.json({mssg: "Hello Kumuthu"})
  res.sendFile("./website/index.html", { root: __dirname });
});
//listen
const server = app.listen(process.env.PORT, () => {
  console.log("Listerning Port ==> ", process.env.PORT);
});

//websocker
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URI,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  },
  transports: ["polling", "websocket"], // Enable WebSocket transport
});
io.on("connection", (socket) => {
  console.log("connected");
});
