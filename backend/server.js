import express from 'express'
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("srever is ready")
})

app.listen(port, () =>{
    console.log(`server is running at${port}`);
})