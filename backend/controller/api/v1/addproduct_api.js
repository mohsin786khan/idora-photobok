const adminAddproduct = require('../../../models/adminAddproduct');

module.exports.showProducts = async(req, res) => {
    try {
        let products = await adminAddproduct.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Not found!, Please Try again"
        })
    }
}

module.exports.showProduct = async(req, res) => {
    try {
        let product = await adminAddproduct.findById(req.params.id);

        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Not Found User, please Try again"
        })
    }
}

module.exports.createProduct = async(req, res) => {
    try {
        let newProduct = await adminAddproduct.create(req.body);
        res.status(200).json({
            message: "Successfully created!",
            newProduct
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Something went wrong, Please try again"
        })
    }
}

module.exports.deleteProduct = async(req, res) => {
    try {
        let deletedProduct = await adminAddproduct.findById(req.params.id)
        deletedProduct.remove()

        return res.status(200).json( {
            message:"Product has been removed"
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Something went wrong, Please try again"
        })
    }
}