require("dotenv").config();
const { app, port } = require("./server");

app.listen(port, () => {
  console.log("Port connected", port);
});
