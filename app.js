import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/javascript", (req, res) => {
  res.sendFile(path.resolve("public/pages/javascript/javascript.html"));
});

app.get("/clean-code", (req, res) => {
  res.sendFile(path.resolve("public/pages/clean-code/clean-code.html"));
});

app.get("/node", (req, res) => {
  res.sendFile(path.resolve("public/pages/node/node.html"));
});

app.get("/express", (req, res) => {
  res.sendFile(path.resolve("public/pages/express/express.html"));
});

app.get("/rest-api", (req, res) => {
  res.sendFile(path.resolve("public/pages/rest-api/rest-api.html"));
});

app.get("/fetch", (req, res) => {
  res.sendFile(path.resolve("public/pages/fetch/fetch.html"));
});

app.get("/deployment", (req, res) => {
  res.sendFile(path.resolve("public/pages/deployment/deployment.html"));
});

app.get("/tools", (req, res) => {
  res.sendFile(path.resolve("public/pages/tools/tools.html"));
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", 8080);
});
