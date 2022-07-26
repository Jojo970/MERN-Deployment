const Pet = require('../model/mongoose.model');

module.exports.findAllPets = (req,res) => {

    Pet.find().then((allPets) => {
        res.json({ Pets: allPets})
    }).catch((err) => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });

}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id:req.params.id}).then((onePet => res.json({ Pet: onePet}))).catch( err => {res.status(400).json({ message:"Something went horribly wrong", error: err});}
    );
}

module.exports.createPet = (req,res) => {
    Pet.create(req.body).then(newPet => {
        res.json( { Pet: newPet})
    }).catch((err) => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, { new:true, runValidators:true}).then( updatedPet => {
        res.json( { Pet: updatedPet})
    }).catch( err => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });
}

module.exports.deletePet = (req,res) => {
    Pet.findOneAndDelete({_id:req.params.id}).then( result => {
        res.json( {result : result} )}).catch( err => {
            res.status(400).json({ message:"Something went horribly wrong", error: err});
        });
};