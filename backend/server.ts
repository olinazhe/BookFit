import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { BookData } from "@full-stack/types";
import fetch from "node-fetch";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/read", async (req, res) => {
    console.log("Server-side code triggered");
    const searchTerm = req.query.q as string; 
    console.log("GET /api/read/ was called");
    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
      }    
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data from Google Books API");
          }      
        const data = (await response.json()) as BookData;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.put("/read/addReadBooks", async (req, res) => {
    const searchTerm = req.query.q as string; 
    console.log("GET /api/read/addReadBooks was called"); 
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data from Google Books API");
          }      
        const data = (await response.json()) as BookData;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, hostname, () => {
    console.log("Listening");
});