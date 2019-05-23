var mysql = require("mysql")
var pool = mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"yjq123456",
    database:"sys_school"
});

function query(sql){
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                reject(err);
            }else{
                connection.query(sql,(err,rows) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })
    
}

module.exports = {query}