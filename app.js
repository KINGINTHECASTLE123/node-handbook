import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", server.address().port);
});
