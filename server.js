import express from "express";
//It looks for the index.js file in "import config from "./config";"
import config from "./config";
// TODO: import router from routes/
import router from "./routes";

const app = express();



//Middleware-I know because it says .use()
app.use(express.json());

app.use("/api",router);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

// app.use((req, res, next) => {
//   console.log(`Logging: ${req.method} method at ${req.url}`);
//   console.log(`The body: ${req.body}`);
//   console.log("Going to the next middleware or route...");
//   //Next!!
//   next();
// });






// app.get("/", (req, res) => {
//   //in this case you don't necessarily need a status code
//   //AKA res.status()
//   res.status(200);
//   res.send("MAYBE...just maybe...you get the get");
// });

// app.post("/", (req, res) => {
//   //Grab the info in the req body
//   //Grab the info they sent along with their request
//   const {body} = req;
//   console.log(body);

//   res.status(200).send("GET YA BODIES BAGGED FOR YA!");
// })

// TODO: use the imported router to handle all requests



app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
