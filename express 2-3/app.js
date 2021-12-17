const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routers/index");

app.set("port", process.env.PORT || 3003);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//error
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

//server
app.listen(app.get("port"), () => {
  console.log(`Serve on port`, app.get("port"));
});
