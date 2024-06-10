const objectstocsv = require("objects-to-csv");
const cors = require("cors");

const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000);

app.post("/", async (req, res) => {
  const csv = new objectstocsv([req.body]);

  //save to file:
  await csv.toDisk("formresponse.csv", { append: true });
  return res.json(await csv.toString());
});
