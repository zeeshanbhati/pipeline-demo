//import "./tracer";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// const conn = mysql.createPool(process.env.DB_URL || "");

// const redisClient = redis.createClient({
//   url: process.env.REDIS_URL,
// });

app.get("/", (req: Request, res: Response) => {
  res.send("Testing CodeDeploy");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("healthy");
});

// app.get("/users", async (req: Request, res: Response) => {
//   const r = await conn.query("SELECT * FROM users");
//   if (r[0]) {
//     return res.status(200).json(r[0]);
//   }
//   res.status(400).json({ error: "Notfound" });
// });

// app.get("/redis", async (req: Request, res: Response) => {
//   const conn = await redisClient.connect();
//   const response = await conn.get("demo");
//   conn.disconnect();
//   return res.status(200).json(response);
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
