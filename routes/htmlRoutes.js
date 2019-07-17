var path = require("path");

module.exports = function(app) {
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"))
    });

    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/portfolio.html"))
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/bio.html"))
    });
};