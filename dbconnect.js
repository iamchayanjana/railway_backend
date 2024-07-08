const mongoose = require('mongoose');
async function main() 
{
    await mongoose.connect('mongodb://127.0.0.1:27017/collagedb');
}
main().then(
    ()=>{console.log('mongodb connected success!');}
).catch(
    (err)=>{console.log(err);}
)

module.exports=mongoose;