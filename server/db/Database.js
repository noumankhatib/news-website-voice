var Data = require('../models/Data');
exports.getAllData = function () {
    return new Promise((resolve, reject) => {
        Data.find({},'categorys',(err, data) => {
            if (err) {
               logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
               logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
};

exports.getData = function (data) {
    return new Promise((resolve, reject) => {
        Data.find(data,(err, data) => {
            if (err) {
               logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
               logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
};

exports.updateData = function (data) {
    return new Promise((resolve, reject) => {
        Data.updateOne( { "username" : data.username },{ $push: { "catagorys": {$each : data.catagorys} } },(err, data) => {
            if (err) {
               logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
               logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
}
exports.insertUser = (obj) => {
    return new Promise((resolve, reject) => {
        let data = new Data(obj);
        data.save().then(() => {
            return resolve();
        }).catch((err) => {
            console.log(err);
            return reject(err);
        })

    });
}

exports.removeCatagory = (data) => {
    return new Promise((resolve, reject) => {
        Data.updateOne( { "username" : data.username },{ $pullAll: { "catagorys": data.catagorys} },(err, data) => {
            if (err) {
               logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
               logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });

    });
}
