const express=require("express");
import amit from './routes/user.router'
const app=express();
app.use(express.json());


//connection
const start=async()=>{
    try{    
app.listen(3000,()=>{
    console.log("server is connected");
})
    }catch(err){
        console.log("error");
    }
}


// app.use('/user',amit)
// export default app;



// import express from 'express';
// const app = express();

// // const PORT = 3000;

// const start = async () => {
//   try {
//     app.listen(3000, () => {
//       console.log("Amit and Tankey gandu");
//       console.log(`Server is running at http://localhost`);
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// start();
// export default app;
