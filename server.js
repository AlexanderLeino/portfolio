import express, { static, json, urlencoded } from 'express';


const app = express()
const PORT = process.env.PORT || 3001

app.use(static('public'))
app.use(json())
app.use(urlencoded({extended:true}))

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
    })