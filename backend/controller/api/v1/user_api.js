const User = require('../../../models/user');
const jwt = require('jsonwebtoken');




module.exports.signup = async function (req, res) {
    const { email, name, password } = req.body;
    
    if (!name || typeof name !== 'string') {
        return res.json(422, {
            message: "either name is empty or it is not a string"
        });
    }

    if (!password || password.length < 8) {
        return res.json(422, {
            message: "password should be greater than 8"
        });
    }
    
    try {
        const user = await User.create({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        });
    
        console.log(user);     
      //    const getToken = await getjwtToken(newUser._Id);
        if (user) {
            return res.send({
                status: "success",
                // token:getToken
            })
        }
    } catch (err) {
        if (err.code==11000) {
            return res.json( {
            message:"user with this email already exist"
        })         
        }
        return res.status(401).json( {
          message: "Internal Server Error"
         });
    }

}



module.exports.signin = async function(req, res){

    try{
        let user = await User.findOne({email: req.body.email});

        if (!user || !await user.matchPassword(req.body.password,user.password)){
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        return res.status(200).json({
            message: 'Sign in successful, here is your token',
            data:  {
                token: jwt.sign(user.toJSON(), 'codeial', {expiresIn:  '30000000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}





// 500 means server encountered an eror
// 422 means server unable to process due to sementic error



// module.exports.signup = async function (req, res) {
    
//     const user = await User.create({
//         email: req.body.email,
//         name: req.body.name,
//         password: req.body.password,
//     });
    
//     try {
//         const savedUser = await user.save();
//         res.send(savedUser);
//     }
//     catch (err) {
//         console.log('********', err);
//         return res.json(500, {
//             message: "Internal Server Error"
//         });
        
//     }
// }