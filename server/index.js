const express=require('express');
const rd=require('./db.js');
const Cors=require("cors");

const app=express();
app.use(Cors());
app.use(express.json());
app.get('/',async (req,res)=>{
let data;
try{
data=await rd.query('SELECT * FROM todo ORDER BY id;');
res.json(data.rows);
}
catch(err){
console.log(err);
}

});

app.post('/',async (req,res)=>{
console.log(req.body);
try{
const data=await rd.query('INSERT INTO todo (entry,pro) VALUES ($1,$2);',[req.body.entry,'f']);
res.json({res:"data received"});
}
catch(err){
console.log(err);}



});


app.put('/:id',async (req,res)=>{
const ind=req.params.id;
try{
const a=await rd.query('UPDATE todo SET pro=NOT pro where id=$1',[ind]);
res.send("data updated");
}
catch(err){
console.log(err);
}
});



app.delete('/:id',async (req,res)=>{
const ind=(req.params.id);
try{
const a=await rd.query('DELETE FROM todo WHERE id=$1',[ind]);
res.send("data deleted");
}
catch(err){
console.log(err);
}
});

app.listen(5555,()=>{
console.log("server up");
});

/*
const express = require('express');
const rd = require('./db.js');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    let data;
    try {
        data = await rd.query('SELECT * FROM todo');
        res.json(data.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const data = await rd.query('INSERT INTO todo (entry, pro) VALUES ($1, $2)', [req.body.entry, 'f']);
        res.json({ message: 'Data received', data: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send("Data updated");
});

app.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send("Data deleted");
});

app.listen(5555, () => {
    console.log("Server up");
});

*/
