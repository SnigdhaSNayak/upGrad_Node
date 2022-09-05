const express=require('express');
const app=express();
app.listen(7772,()=>{

console.log("Student app  server started:::");


});



const students = {

    1: {
        id: 1,
        name: "Anshu",
        age: 14,
        subject: "Math and more ..."
    },
    2: {
        id: 2,
        name: "Pramshu",
        age: 13,
        subject: "Science and more  ..."
    },
    3: {
        id: 3,
        name: "Pramshu",
        age: 16,
        subject: "Science and more  ..."
    }
};

function mw(req,res,next) {
    const sudentBody = req.body ;     
    
    if(sudentBody.age=='undefined' || sudentBody.name=='' || sudentBody.subject==''){
  
        res.status(404).send("Student body is invalid")

    }
    
        next();
    


 };






app.get("/sapp/v1/students/", (req, res) => {

   // console.log("Param object ", req.params);
    /**
     * Handler of the GET request
     * 
     * req -> request object, and it will have the req related info
     * res -> response object, this will be created and sent by this app
     */
    res.status(200).send(students);
});

app.use(express.json());


app.post("/sapp/v1/students/:id", mw,(req, res)=>{
   
    // I need to first read the request body
   
    const studentBody = req.body;   
    app.use(mw);   
     
    var id=req.params.id;
    students.id = id++;
    

   /**
    * Appending new movie into the existing  movies object
    */
   students[students.id] = studentBody;
    res.status(201).send(students);
    
 });
 

