const express=require('express');
const fs=require('fs');
var base64ToImage = require('base64-to-image');
const app=express();
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.listen(3000,()=>{
	console.log("Server Running");
})
app.post('/api',(req,res)=>{
	const data=req.body;
	// console.log(data.image);
	var base64Str = data.image;
	var path ='./public/';
	var optionalObj = {'fileName': 'image', 'type':'png'};
	    base64ToImage(base64Str,path,optionalObj); 
	var imageInfo = base64ToImage(base64Str,path,optionalObj); 
});