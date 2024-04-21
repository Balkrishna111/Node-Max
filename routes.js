const fs = require("fs");

const utils = (req, res) => {
  // console.log(req.url, req.headers);

  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && req.method == "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const finalData = parsedData.split("=")[1];
      fs.writeFileSync("example.txt", finalData);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node App</title></head>");
  res.write("<body><h1>Welcome to my first Node App</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = utils;
