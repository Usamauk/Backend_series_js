import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.get('/',(req , res) => {
    res.send("server is ready");
});

app.get('/facebook',(req , res) => {
    res.send("server is ready for facebook");
});

// get a list of jokes

app.get('/api/jokes', (req,res) =>{
    const jokes = [
        {
            id : 1,
            title : "usama",
            content : "where"
        },
        {
            id : 2,
            title : "faisal",
            content : "How"
        },
        {
            id : 3,
            title : "daniyal",
            content : "from"
        },
        {
            id : 4,
            title : "moiz",
            content : "are"
        },
        {
            id : 5,
            title : "zubair",
            content : "where go"
        }
    ];
    res.send(jokes)
});



app.listen(port , () =>{
    console.log(`server at http://localhost:${port}`);
    
})