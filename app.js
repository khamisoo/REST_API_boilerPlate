const express = require("express");
const bodyParser=require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//  --                                  connect 3la el DB eli 3aiz a5od mnhaa data bnfs el Schemaa bta3thhaa   ---

mongoose.connect(mongodb://localhost:27017/"data base we want to restful it");

const getDataSchema={
  /*title:String,
  content:String

  make schema like where we put in data base we want to read
  */
};


//  const Rdata =mongoose.model("Rdata",getDataSchema);  {make same modele to add on it data and remove data }

app.route("/data")
.get(function(req,res){


// DB name .find {}   =>    it will get back all the data we need from db

})


//-          -----        Makinng post in route of all data beacouse to add data it must be on model not excit part

.post(function(req,res){
/*
 --   we use  req.body."the schema key we want to add"
   -- use post man post with body url encodedd to add data with same kays and val
    -- send it by post man

        -- add data inti DB

const newData = new 'DB NAME'({
schemakeys:val=== req.body.~~~~

});
new ~~~ .save(function(err){

if (err){Added}else{err}

});
  */

})


// --                             Delete modele from DB ---

.delete(function(res,req){

/*
-- modeleName.deleteMany({},function(err){
if(err){

}else{

}
   });

*/
});


  //                  ---  Get specifiec DAta from db -------
///  - we have to make another get route to add specific data
app.route("/data/:dataId")

.get(function(req,res){

/*
req.params.dataId
-/ read onley one data from db  soo
-- DBNAme.findOne(_id:req.params.dataId,function(err,docs){
if(){

}else{

}
});


*/
// HTML URL Encoding Reference
})
//   ----         update data in data alredy on DB --
.put(function(req,res){

/*
modeleName.update({condition},{update},{overwrite:true},function(err,result){});
              {title:req.params}/{title:req.body.key}/
 --


 it will overwrite the doc we choose doc to new document

*/

})

// ---                   update doc with out overwrite and set flag to ubdate just one field
.patch(function(req,res){

/*
modeleName.update({condition},{set:{title:req.body.key, content:"ggg"}},{overwrite:true},function(err,result){});
              {title:req.params}/{SET:{REQ.BODY}}/


//  EL A5TLLAF EN HNAA BNST5DMHHAA 3SHAN N UPDATEE GOZ2 WA7DD BS FL ATA JUST ONE FIELD


*/


})

// --                                                -DElete specific data from database

.delete(function(req,res){
/*

ModelName.deleteONe({condition},function(err))
                    { _id:req.params."3la 7sb ma ktbna"}



*/

});


//  we using postMan to choose the verb and try itt













app.listen("3000",function(){
  console.log("running on 3000");
});
