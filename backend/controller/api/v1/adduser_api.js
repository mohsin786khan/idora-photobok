const Adduser = require('../../../models/adduser');

module.exports.create = async function (req, res) {
    try {
        let newuser = await Adduser.create(req.body);
        return res.status(200).json({
            message: "sucessfully created",
            newuser
        });
    }
    catch (err) {
        console.log(err)
        return res.status(401).json( {
            message: "Internal Server Error"
        });
    }
}

module.exports.edit = async function (req, res) {
    try {
        if (req.params.id) {
            await Adduser.findByIdAndUpdate(req.params.id, req.body, function (err, edituser) {
                if (err) {
                    return res.status(401).json({
                        message: "Internal Server Error"
                    });
                }
                else {
                    console.log(edituser);
                    return res.status(200).json({
                        message: "updated sucessfull",
                        edituser
                    })
                }
            })
        }        
} catch (err) {
    return res.status(401).json( {
        message: "Internal Server Error"
    });
    }
}

module.exports.delete = async function (req, res) {
    try {
        let deleteuser = await Adduser.findById(req.params.id);
        deleteuser.remove();

        return res.status(200).json( {
            message:"user has been removed"
        });
} catch (err) {
    return res.status(401).json( {
        message: "Internal Server Error"
       });
    }    

}

module.exports.showList = async function (req, res) {
    try {

        let users = await Adduser.find({});

        return res.status(200).json({
            message: "sucessfully created",
            users
        });
    
}catch (err) {
    return res.status(401).json({
        message: "Internal Server Error"
    });
    }
    
}

module.exports.showUser = async function(req, res) {
    try {
        let user = await Adduser.findById(req.params.id);

        return res.status(200).json(user)
    } catch(err) {
        return res.status(404).json({
            message: "No Found"
        })
    }
}