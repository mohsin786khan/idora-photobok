const Master = require('../../../models/mastersetting');

module.exports.create = async function (req, res) {
    try {
        let newEntry = await Master.create(req.body);

        return res.status(200).json({
            message: "sucessfully created",
            newEntry:newEntry
        })
    }
    catch (err)
    {
        return res.status(401).json( {
            message: "Internal Server Error"
        });
    }
}


module.exports.showAll = async function (req, res) {
    try {
        let users =await Master.find({}); 
        
        return res.status(200).json({
            message: "sucessfully created",
            users_in_master: users
        });
    }
    catch(err) {
        return res.status(401).json( {
            message: "Internal Server Error"
        });   
    }
}


module.exports.update = async function (req, res) {
    try {
      //  console.log("ji", req.params.id);
        if (req.params.id) {
            let userEdit =  Master.findByIdAndUpdate(req.params.id, req.body, function (err, info) {
                if (err)
                {
                    return res.status(401).json( {
                        message: "Internal Server Error"
                    });  
                }
                else {
                    console.log(info);
                    return res.status(200).json({
                        message: "updated sucessfull",
                        info
                    });
                }

            });
        }     
    }
    
    catch (err) {
        return res.status(401).json( {
            message: "Internal Server Error"
        });   
    }
}

module.exports.delete = async function (req, res) {
    console.log(req.params.id);
    try {
        let deleteone = await Master.findById(req.params.id);
        deleteone.remove();

        return res.json(200, {
            message:"user has been removed"
        });

        }     
     catch (err)
    {
        return res.status(401).json({
            message: "internal server error",
        });       
 }   
}