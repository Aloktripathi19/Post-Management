let mongoose = require("mongoose")
let express = require("express")
let cors = require("cors")
const rt = require("./routess/rtes")

let app = express()
app.use(express.json())
app.use(cors())
app.use("/",rt)

mongoose.connect("mongodb://127.0.0.1:27017/postmapp").then(()=>{
    console.log("con ok")
})

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
