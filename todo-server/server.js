const express = require("express");
const mongoose = require("mongoose");
const { createActivity, getActivity, deleteActivity } = require("./controllers/activityController");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const dns = require("dns");
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongo_url = "mongodb+srv://jeniferaloysius2007_db_user:HSuuYJoQZ9A5oo4o@cluster0.tanjzfe.mongodb.net/?appName=Cluster0";

mongoose
    .connect(mongo_url)
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log("unable to connect to MongoDB", err));

app.post("/create", createActivity);
app.get("/", getActivity);
app.delete("/:id", deleteActivity);
//http://localhost:8080/
app.listen(8080, () => {
    console.log("server listening on port 8080");
});