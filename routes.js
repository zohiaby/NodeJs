if (url === "/") {
  res.write("<html>");
  res.write("<head><title>Enter Message Page</title></head>");
  res.write(
    "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Submit your data</button></form></body>"
  );
  res.write("</html>");
  return res.end();
}
if (url === "/message" && req.method === "POST") {
  const body = [];
  // event listener for data
  req.on("data", (chunk) => {
    console.log("chunk data ----->", chunk);
    body.push(chunk);
  });
  // event listener for end
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log("parsed data -------->", parsedBody);
    const message = parsedBody.split("=")[1];
    fs.writeFile("message.txt", message, () => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  });
}

res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title>My First Page</title></head>");
res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
res.write("</html>");
res.end();
