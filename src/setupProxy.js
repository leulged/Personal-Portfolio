const contact = require("../api/contact");

module.exports = function setupContactProxy(app) {
  app.post("/api/contact", (req, res) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      req.body = raw;
      contact(req, res);
    });
  });
};
