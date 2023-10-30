const TermModel=require('../model/term.model')
// Đảm bảo rằng bạn đã đặt async cho route handler
class TermController {
    async getAllTermController(req, res, next) {
        try {
            const result = await TermModel.getAllTermModel();
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
}
module.exports = new TermController()
