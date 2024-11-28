const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/tickets/read-tickets", (req, res) => {
  try {
    res.json({ success: true, db: { name: "reading tickets" } });
  } catch (error) {
    console.error("An error ocurred while reading tickets");
  }
});

app.get("/api/tickets/book-tickets", (req, res) => {
  try {
    res.json({ success: true, db: { name: "booking tickets" } });
  } catch (error) {
    console.error("An error ocurred while reading booked tickets");
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
