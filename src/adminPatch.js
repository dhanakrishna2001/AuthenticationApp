const Employee=require("./db/employee");
require("./db/connectDb");

async function createAdmin(){
    try{
        let admin=new Employee({
            username:"ADMIN",
            email:"curatedsolutionreplica@gmail.com",
            phoneNumber:"9952439367",
            password:"ratedrated",
            accessLevel:"ADMIN",
            role:"ADMIN"
        })
        await admin.save();
        console.log("admin created succefully");
    }catch(e){
        console.log(e.message);
    }
}

createAdmin()
.then(()=>{
    process.exit();
})