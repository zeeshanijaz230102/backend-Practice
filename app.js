const express= require("express") // Import the Express.js module


// This app object will be used to define routes, middleware, 
// and to listen for incoming requests.
const app = express();  // This line initializes a new Express application
const PORT =3000; // Define the port number for the server

// abb routes creates karry ge / , /zeeshan are routes
// app.get(route , request handler=>{}); 
app.get('/' ,function ( req , res){
    res.send ("SERVER RUNNING PERFECTLLY!");
});

app.get('/zee' , function(req , res){
    res.send("Hello world.....!");
});
    



// app.listen(PORT, ...): 
// Starts the server and makes it listen for requests on port 5000. 
// When the server is successfully running, it will log
// "Server is running on http://localhost:3000".
//  With backticks we write messeges and include variables within them like ${var_name}
app.listen(PORT , ()=>{
    console.log(`Server is running perfectlly onnn http://localhost:${PORT}`);
});