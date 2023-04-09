import express, { Request, Response } from "express";

const server = express();

server.get("/", (_, res: Response) => {
  return res.send("Hi, Dev");
});

export { server };
