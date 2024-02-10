import express from 'express'
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("srever is ready")
})

//List of 5 jokes:
app.get('/api/jokes', (req, res)=>{
   const jokes = [
    {
        id: 1,
        title: 'A joke',
        content: 'this is a joke'
    },
    {
        id: 2,
        title: 'Another joke',
        content: 'this is another joke'
    },
    {
        id: 3,
        title:'third joke',
        content:'this is third joke'
    },
    {
        id: 4,
       title: 'fourth joke',
       content: 'this of fouth joke'
     },
     {
        id:5,
        title: 'fifthe joke',
        content: 'this is fifth joke'
     }
   ];
   res.send(jokes)
});

app.listen(port, () =>{
    console.log(`server is running at${port}`);
})

