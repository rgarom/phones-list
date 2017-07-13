"use strict";

const express = require("express"),
  app = express();

require("./routes")(app);

app.listen(3005, () => {
  console.log("Node server running on http://localhost:3005");
});
