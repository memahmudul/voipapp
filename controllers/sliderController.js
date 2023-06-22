import sliderImageModel from "../models/sliderImageModel.js";

export const addSliderImageController = async(req,res)=>{
    try { 
        const {image_array} = req.body
        
        
        if(!image_array){
            return res.send({error: 'can not find image_url_1'})
        }
       

        

       


        const data = await new sliderImageModel({images:image_array}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "new slider image  table added successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in adding new slider image table",
            error

        })
    }
       
}



export const editSliderImageController = async(req,res)=>{
    try { 
        const {image_array} = req.body

        console.log(image_array);
        
        
        if(!image_array){
            return res.send({error: 'can not find image_array'})
        }


        const images = image_array
       

        

       


        const data = await sliderImageModel.findOneAndUpdate({},{images})
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "slider image  table edited successfully",
                   
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in editing  slider image table",
            error

        })
    }
       
}



export const getSliderImageController = async(req,res)=>{
    try {
       

    
    const result = await sliderImageModel.find({})
  
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any slider Image"
            })
        }else{
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'slider Images fetched Successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching SLider Images",
            error

        })
        
    }
}

