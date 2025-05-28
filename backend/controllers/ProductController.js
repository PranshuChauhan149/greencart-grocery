import Product from "../models/Product.js";


export const addProduct = async (req,res)=>{
try{
  let productData = JSON.parse(req.body.productData);

  const images = req.files
  let imagesUrl = await Promise.all(
    images.amp(async (item)=>{
      let result  = await connectCloudinary.uploader.upload(item.path,{
        resource_type : 'image'
      });
      return result.secure_url
    })
  )
  await Product.create({...productData,image : imagesUrl})

  res.json({success  : true ,message : "Product Added"})
}
catch(error){
  res.json({success  : false ,message : error.message})
}
}



export const productList = async (req,res)=>{
try{
  const product   = await  Product.find({})
  res.json({success :true , product});

}
catch(error){
  res.json({success  : false ,message : error.message})
}
}




export const productById = async (req,res)=>{
  try{
    const {id} = req.body;
    const product = await Product.findById(id);
    res.json({success : true , product})
  }
 catch(error){
  res.json({success  : false ,message : error.message})
}
}



export const changeStock = async (req,res)=>{
  try{
const {id,inStock} = req.body;

await Product.findByIdAndUpdate(id,{inStock})

    res.json({success : true , message : "Stock Updated"})


  }
  catch(error){
  res.json({success  : false ,message : error.message})
}
}
