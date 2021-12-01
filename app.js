 const express=require("express")
 const app = express();
 const port = 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))

app.get("/", function (req, res) {
    res.render("index",{titulo:"node"})
})


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);

 })