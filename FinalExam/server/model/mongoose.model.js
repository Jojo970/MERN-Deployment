const mongoose = require('mongoose');

const PetSkill = new mongoose.Schema(
    {
        skill:{
            type:String
        }
    }
)

const PetSchema = new mongoose.Schema(
    {
        petName:{
            type:String,
            minLength: [3, "Pet's name must be atleast 3 characters"],
            required:[
                true,
                "Pet name is required"
            ]
            
        },
        petType: {
            type:String,
            minLength:[3, "Pet's type must be atleast 3 characters"],
            required:[
                true,
                "Pet type is required"
            ]
        },
        petDescription: {
            type:String,
            minLength:[3, "Description must be atleast 3 characters"],
            required: [
                true,
                "Please provide a short description"
            ]
        },
        petSkill1:{
            type:String,
        },
        petSkill2:{
            type:String,
        },
        petSkill3:{
            type:String,
        }
        
    }
)

const Pet = mongoose.model('Pets', PetSchema)

module.exports = Pet;