//  Assignment 1 
// Name:Vivek Kundaliya
// Id:301311622
// Date:03/10/2023
// 

//Importing express and all other modules on top
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

//User data modules
const userProjects = require("./userData/projecthelper.js");

//Setting up the view engine and it's directory
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//All Express middleware/ Static files
app.use(express.urlencoded({ extended: true })); //req.body is parsed as a form
app.use(methodOverride("_method")); //Setting the query for method-override
app.use(express.static(path.join(__dirname, "public"))); //It will serve our static files


// Default Index/Home Route
// We don't need to add backslash when rendering view pages
app.get("/", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("homepage", { projects });
  } catch (e) {
    console.log(e);
  }
});

// Experience Route
app.get("/experience", (req, res) => {
  res.render("experience");
});

// Experience Route
app.get("/projects", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("projects", { projects });
  } catch (e) {
    console.log(e);
  }
});
// // Routes
// app.get('/', (req, res) => {
//   res.render('About_Me');
// });

app.get("/about", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("about", { projects });
  } catch (e) {
    console.log(e);
  }
});
app.get("/skills", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("skills", { projects });
  } catch (e) {
    console.log(e);
  }
});

app.get("/contact", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("contact", { projects });
  } catch (e) {
    console.log(e);
  }
});
// app.get('/experience', (req, res) => {
//   res.render('Experience');
// });

// app.get('/footer', (req, res) => {
//   res.render('Footer');
// });

// app.get('/header', (req, res) => {
//   res.render('Header');
// });
//Starting up server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on the port: ${port}`);
});
