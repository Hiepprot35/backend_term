const { dbconnection } = require('../config/dbconfig');
class TermModel {
    async getAllTermModel(data) {
        const result = await new Promise(function (resolve, reject) {
            dbconnection.query('SELECT * FROM term where title=?',[data.title], (err, result) => {
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
                console.log(dataFinal)
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
    async getAllTitle()
    {
        try {
            const result = await new Promise(function (resolve, reject) {
                dbconnection.query('SELECT title,Mota FROM `term`GROUP BY title', (err, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            }
    
            );
            return result;
        } catch (error) {
            
        }
    }

}

module.exports = new TermModel()

