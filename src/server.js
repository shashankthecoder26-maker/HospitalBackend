const express=require('express');
const cors = require("cors");
require("dotenv").config();
const app = express();
const pool = require("./config/db");
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("mediflow  api running");

})


app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});


const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});