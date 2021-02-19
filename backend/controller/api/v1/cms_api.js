const AdminCms = require('../../../models/admincms');

module.exports.create = async function (req, res) {
    try {
        console.log(req.body);
        let newEntry = await AdminCms.create(req.body);
         
        return res.status(200).json({
            message: "sucessfully created",
            newEntry:newEntry
        })

    } catch (err) {
        return res.status(401).json( {
            message: "Internal Server Error"
        });
    }
}


module.exports.showall = async function (req, res) {
    try {
        let users =await AdminCms.find({}); 
        
        return res.status(200).json({
            message: "sucessfully created",
            users_in_Cms: users
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
            let userEdit =  AdminCms.findByIdAndUpdate(req.params.id, req.body, function (err, info) {
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
        let deleteone = await AdminCms.findById(req.params.id);
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



