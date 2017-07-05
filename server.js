var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require ("./controllers/burgerController.js")
var app = express();
var PORT = process.env.PORT||3000;

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));



app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





app.use("/",routes);
app.use("/update",routes);
app.use("/create",routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});