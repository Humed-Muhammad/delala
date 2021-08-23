import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
export default async (req, res) =>{
    if(req.method == "POST"){
        const userData = req.body;
        const email = userData.email;
        const checkEmail = await prisma.user.findUnique({
            where:{email: email}
        })

        if(checkEmail){
            res.json("Please provide a uniqe email!")
        }else{
            const savedUser = await prisma.user.create({
            data: userData});

            res.json(savedUser)
        }
       
    }
}