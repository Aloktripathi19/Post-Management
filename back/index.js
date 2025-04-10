let mongoose = require("mongoose")
let express = require("express")
let cors = require("cors")
const rt = require("./routess/rtes")

let app = express()
app.use(express.json())
app.use(cors())
app.use("/",rt)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
