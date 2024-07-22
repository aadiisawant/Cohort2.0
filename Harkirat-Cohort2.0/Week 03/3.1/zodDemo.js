
const zod = require('zod')

function validateCredentials(data){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(data);
    if(response.success){    
        console.log(response.data);
    }else{
        console.log("ERROR :",response.error.message);
    }
    
}
validateCredentials({
    email:"aditya@gmail.com",
    password: "1345134684"
})
