const express = require('express')
const dotenv = require('dotenv')
const app = express()
const PORT = process.env.PORT || 3001

let posts = [{
    username: "Bob",
    title: "Bob's first post"
},
{
    username: "Bob",
    title: "Bob's second post"
},
{
    username: "Timmy",
    title: "Timmy's first post"
}]

app.get('/',(req,res)=>{
    res.redirect('/posts')
})

app.get('/posts', (req, res)=>{
    console.log("port routes")
    res.send(posts)

})



app.listen(PORT, (req, res)=>{
    console.log("Running on port =>", PORT)
})
