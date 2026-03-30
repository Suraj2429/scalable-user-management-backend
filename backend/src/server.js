import dotenv from "dotenv";
dotenv.config(); 

import app from './app.js';

console.log("PORT:", process.env.PORT);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Loaded " : "Missing ❌");

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});