import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2/promise';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const conn = mysql.createPool(process.env.DATABASE_URL || "");

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Hello World");
});

app.get("/users",   async (req: Request, res: Response) => {
 const r = await conn.query("SELECT * FROM users");
  if(r[0]){
    return res.status(200).json(r[0]);
  }
  res.status(400).json({ error: "Notfound" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
