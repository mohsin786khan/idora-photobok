const Admin = require('../../../models/adminLogin');
const jwt = require('jsonwebtoken');
//const { getMaxListeners } = require('../../../models/admin');


    // Admin.create({
    //     email: mohsin@gmail.com,
    //     password:123456
    // })


// module.exports.signUp = async function (req, res) {
//     const { email , password } = req.body;
    

//     if (!password || password.length < 5) {
//         return res.json(422, {
//             message: "password should be greater than 8"
//         });
//     }
    
//     try {
//         const admin = await Admin.create({
//             email: req.body.email,
//             password: req.body.password,
//         });
    
//         console.log(admin);     
//       //    const getToken = await getjwtToken(newUser._Id);
//         if (admin) {
//             return res.send({
//                 status: "success",
//                 // token:getToken
//             })
//         }
//     } catch (err) {
//         return res.status(401).json( {
//           message: "Internal Server Error"
//          });
//     }
// }

module.exports.signin = async function(req, res){

    try {
        console.log(req.body);
        let admin = await Admin.findOne({email: req.body.email});

        if (!admin || !await admin.matchPassword(req.body.password, admin.password)){
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        return res.status(200).json({
            message: 'Sign in successful, here is your token',
                token: jwt.sign(admin.toJSON(), 'codeial', {expiresIn:  '30000000'})
        })

    }catch(err){
        console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}






