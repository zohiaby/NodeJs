// routes.js
const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>This is the home Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users Page</title></head>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("user.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  if (url === "/create-user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Create User </title></head>");
    res.write(
      "<body><form action='/create' method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
