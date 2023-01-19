const express = require ('express')
const app = express()
const port = 3000

app.get ('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, ()=>{
	console.log('Example app listening on port ${}')
})

app.get("/api/webhook",(req, res) => {
	res.send('se ha hecho un llamado al webhook)
	console.log(req.body)
})
