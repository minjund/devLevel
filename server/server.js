const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (err, res) => {
    res.send("aa");
})
app.listen(port,err=>{
    if(err){
        console.log("에러나여");
    }else{
        console.log("서버 띄우기 성공");
    }
})
