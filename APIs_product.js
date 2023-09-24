const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const datas = [
  {
    name: "sawi",
    satuan: "200gr",
    price: "9000",
  },
  {
    name: "wortel",
    satuan: "500gr",
    price: "7000",
  },
  {
    name: "bawang merah",
    satuan: "200gr",
    price: "12000",
  },
  {
    name: "tomat",
    satuan: "1kg",
    price: "20000",
  },
  {
    name: "brokoli",
    satuan: "500gr",
    price: "15000",
  },
  {
    name: "anggur",
    satuan: "250gr",
    price: "22000",
  },
  {
    name: "semangka",
    satuan: "1pcs",
    price: "40000",
  },
  {
    name: "apel",
    satuan: "500gr",
    price: "7000",
  },
  {
    name: "jeruk",
    satuan: "200gr",
    price: "9000",
  },
  {
    name: "pisang",
    satuan: "1pcs",
    price: "40000",
  },
  {
    name: "mangga",
    satuan: "500gr",
    price: "7000",
  },
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json.
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Data fetched successful!",
    data: datas,
  });
});

app.post("/shop", (req, res) => {
  console.log(req.body, "body post");

  res.status(200).json({
    success: true,
    message: "successful!",
  });
});

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}!`));