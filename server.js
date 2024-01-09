const express = require("express");

//this is what express tells us to do to initiate the library
const app = express();

//this is the port to listen to...
const port = 3000;

//axios is a nice library for HTTP requests!
const axios = require("axios");

//cors is for allowing any site to use this api
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function getDogsList() {
  const res = await axios({
    url: "https://api.airtable.com/v0/appKqxOhrtoS6eTUj/Dogs?maxRecords=3&view=Grid%20view",
    headers: {
      Authorization:
        "Bearer patS3K00UP2l4xgeh.ae96cccf48dfae4d0d0b6029096a7e594b8b22cc6ca9c9543bc19fca321af29b",
    },
  });
  return res.data;
}

app.get("/", (req, res) => {
  res.send(response);
});

app.get("/dogs", async (req, res) => {
  const data = await getDogsList();
  res.send(data);
});

app.post("/dogs", (request, res) => {
  console.log(request.body);
  res.send("Thank you for posting");
});

app.listen(port, () => {
  console.log(`Server is Running :P`);
});
