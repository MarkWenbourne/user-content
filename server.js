var express = require("express")
var fs = require("fs")

var peopleData = require("./peopleData.json")

var app = express()
var port = process.env.PORT || 8000

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static("static"))

app.get("/", function (req, res, next) {
  res.status(200).render("homePage")
})

app.get("/people", function (req, res, next) {
  res.status(200).render("peoplePage", {
    people: peopleData
  })
})

app.get("/people/:person", function (req, res, next) {
  var person = req.params.person.toLowerCase()
  if (peopleData[person]) {
    res.status(200).render("photoPage", peopleData[person])
  } else {
    next()
  }
})

app.post("/people/:person/addPhoto", function (req, res, next) {
  var person = req.params.person.toLowerCase()
<<<<<<< HEAD
  console.log("req.body:", req.body)
=======
  console.log("== req.body:", req.body)
>>>>>>> 3d66be25411cd4ac9b03d2b51582aaf6aa012af4
  if (peopleData[person]) {
    if (req.body && req.body.url && req.body.caption) {
      var photo = {
        url: req.body.url,
        caption: req.body.caption
      }
<<<<<<< HEAD
      console.log("photo:", photo)
      peopleData[person].photos.push(photo)
      console.log("peopleData[person].photos:", peopleData[person].photos)
=======
      console.log("  -- photo:", photo)
      peopleData[person].photos.push(photo)
      console.log("  -- peopleData[person].photos:", peopleData[person].photos)
>>>>>>> 3d66be25411cd4ac9b03d2b51582aaf6aa012af4
      fs.writeFileSync(
        "./peopleData.json",
        JSON.stringify(peopleData, null, 2)
      )
<<<<<<< HEAD

      res.status(200).send("Received a photo!")
    } else {
      res.status(400).send("Need a request body with 'url' and 'caption'")
=======
      res.status(200).send("Received a photo!")
    } else {
      res.status(400).send("Need a request body with `url` and `caption`")
>>>>>>> 3d66be25411cd4ac9b03d2b51582aaf6aa012af4
    }
  } else {
    next()
  }
})

app.get("*splat", function (req, res, next) {
  res.status(404).render("404", {
    page: req.url
  })
})

app.listen(port, function () {
  console.log("== Server listening on port", port)
})
