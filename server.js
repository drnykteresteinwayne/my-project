//port config
const port = 3001;
//express config
const exp = require('express');
//config the server appliacation 
const app = exp();
app.use(exp.json());
const name = "Ashen";
const age = 25;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Name: ${name}, Age: ${age}`);
});
//new way 
//app.listen(port);

app.get('/', (req, res) => {
    res.send('Hello new World!');
});