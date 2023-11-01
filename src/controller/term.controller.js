const TermModel=require('../model/term.model')
// Đảm bảo rằng bạn đã đặt async cho route handler
class TermController {
    async getAllTermController(req, res, next) {
        console.log(req.params)
        try {
            const result = await TermModel.getAllTermModel(req.params);
            res.send(result);
        } catch (error) {
            res.json(`Internal Server Error: ${error.message}`);
        }
    }
    async insertTermController(req,res,next)
    {
        console.log("Dữ liệu nhận được",req.body)
        try {
            const result=await TermModel.insertTermModel(req.body);
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    async getAllTitleController(req,res,next)
    {
        try {
            const result= await TermModel.getAllTitle()
            res.send(result)
        } catch (error) {
            console.log(error)

        }
    }
}
module.exports = new TermController()
