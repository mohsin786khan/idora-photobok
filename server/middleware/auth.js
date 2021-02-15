const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

module.exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { }
    {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, 'codeial');
 
            req.user = await Admin.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            res.status(401).json({
                error:"invalid token"
            })
           
        }
    }
 
    if (!token) {
        res.status(401).json({
         message:"not authorised, no token"
        })
        
    }
 
};















    
// module.exports.protect = async function (req, res, next) {
//     let verifyToken;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         verifyToken = req.headers.authorization.split(' ')[1];
//     }
//     if (!verifyToken) {
//         return res.status(400).json({
//             message: "token not found"
//         })
//     }

//     try {
//         const decode = jwt.verify(verifyToken, "codeial");
//         const CurrentUser = await Admin.findById(decode._id);
//         if (!CurrentUser)
//             return res.send(`User doesn't exists longer!`);

//         req.user = CurrentUser;
//         next();
//     } catch (error) {
//         if (error.name === "JsonWebTokenError")
//             return res.send(`Invalid Token ID, Please login to get access.`);
//         if (error.name === "TokenExpiredError")
//             return res.send(`Token Expires, Please login to get access`);
//         if (error) return res.send('Please login Again!!!');
//     }

// }​​​​​
//  ​​












// // const protect = (req, res, next) => {
// //     const authHeader = req.headers.authorization;

// //     if (authHeader) {
// //         const token = authHeader.split(' ')[1];

// //         jwt.verify(token,"codeial", (err, user) => {
// //             if (err) {
// //                 return res.sendStatus(403);
// //             }

// //             req.admin = admin;
// //             next();
// //         });
// //     } else {
// //         res.sendStatus(401);
// //     }
// // };

// // // const protect = async function (req, res, next) {
    

// // //     try {
// // //         if (   req.headers.authorization &&
// // //                 req.headers.authorization.startsWith("Bearer")) {
// // //                     const bearerToken = req.headers.authorization.split(" ");
// // //                     const token = bearerToken[1];
// // //                     const decoded = verify(token, codeial);
// // //                     req.admin = await Admin.findById(decoded.id).select("password");
// // //                     next();
// // //         }
        
// //         else{
// //            return res.send("not running");
// //          //   throw new Error("not authorized, no token");
// //             }
// //     } catch (err) {
// //         console.log(error);
// //         res.status(401);
// //         throw new Error("Not authorized, token failed");
// //     }   
// // }

 