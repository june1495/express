import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => console.log("Server is running in port 3000"));
