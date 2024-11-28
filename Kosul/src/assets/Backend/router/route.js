import express from "express";
import cors from "cors";
import addemail from "./emailadder.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/emailadd", async (req, res) => {
  const data = req.body.email;

  if (!data) {
    return res.status(400).send({ error: "Email is required" });
  }
  await addemail(data);

  console.log(data);
  res.status(200).send({ message: "Email received", email: data });
});

app.get("/searchid", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
