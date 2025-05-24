const mongoose = require("../config/db"); 

const ourphilosophyschema = new mongoose.Schema({
    
}, {
    timestamps: true, 
});


const OurPhilosophy = mongoose.model("our_philosophy", ourphilosophyschema);

module.exports = OurPhilosophy;


