import app from "./app.js";
import connect from "./src/db/db.js";

const port = process.env.PORT || 8080;

try {
  const dbConnection = await connect();
  if (dbConnection) {
    app.listen(port, () => {
      console.log(`Server is running on the port ${port}`);
    });
  }
} catch (error) {
  console.log("Server Error:", error);
}
