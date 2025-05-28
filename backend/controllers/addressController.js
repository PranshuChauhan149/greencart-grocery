import Address from "../models/Address.js"



export const addAddress = async(req,res) => {
try{
const {addtess,userId} = req.body
await Address.create({...Address.userId})

res.json({success : true, message : "Address added successfully"})
}
catch(error){
  res.json({success : false, message : error.message})

}
}


export const getAddress = async (req,res) =>{
  try{
    const {userId} = req.body
    const address  =await Address.find({userId})
      res.json({success : true, address})
  }
catch(error){
  res.json({success : false, message : error.message})

}
}