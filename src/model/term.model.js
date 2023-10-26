const { dbconnection } = require('../config/dbconfig');
class TermModel {
    async getAllTermModel() {
        const result = await new Promise(function (resolve, reject) {
            dbconnection.query('SELECT * FROM term', (err, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        }

        );
        return result;
    }
    async insertTermModel(data) {

        // Tạo một mảng các promise cho từng truy vấn INSERT
        try {
            const insertPromises = data.map(term => {
                const img=term.HinhAnh?.data
                const  HexDataImg=img && img.map(byte => byte.toString(16).padStart(2, '0')).join('');
                const binaryImg=HexDataImg&& Buffer.from(HexDataImg, 'hex');
    
                const dataFinal = { ...term, HinhAnh: binaryImg || "IMG" }
    
                return new Promise((resolve, reject) => {
                    dbconnection.query('INSERT INTO term SET ?', dataFinal, (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(err);
                        }
                    });
                });
            });
            return insertPromises
        } catch (error) {
            console.log(error)
        }
      

    }

}

module.exports = new TermModel()

