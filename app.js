const express = require("express");

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });

//   response.send(status) is now a function that takes the JSON object as the argument.

app.get("/status", (request, response) => {
     const status = {
        "Status": "Running"
     };
     
     response.send(status);
  });