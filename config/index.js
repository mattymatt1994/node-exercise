import dotenv from "dotenv";

// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT),
};
//.env = environment variables
//code not available for anyone to read
//it's how to cloak sensitive code/material
//with the git ignore the .env will not be posted on github
//IMPORTANT
