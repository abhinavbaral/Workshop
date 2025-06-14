import express from "express";
const app = express ();
const port = 4000;;
app.use(express.json);
app.get("/",(req, res) =>
{
    res.send("Hello");
});
app.get("/greet",(req, res) =>
{
    res.send("Hello. This is Greeting route");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});