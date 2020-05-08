var opinionFeeds = require('../models/opionFeeds');
var logger = global.logger;

exports.getAllOpinionFeeds = function () {
    return new Promise((resolve, reject) => {
        opinionFeeds.find((err, data) => {
            if (err) {
                //logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
                //logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
};

exports.getOpinionFeeds = function (data) {
    return new Promise((resolve, reject) => {
        opinionFeeds.findOne(data,(err, data) => {
            if (err) {
                //logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
                //logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
};

exports.updateOpinionFeeds = function (data) {
    return new Promise((resolve, reject) => {
        opinionFeeds.updateMany( { "title" : data.title },{$set : data},(err, data) => { 
                 if (err) {
                //logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
                //logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });
    });
}
exports.insertOpinionFeeds = (obj) => {
    return new Promise((resolve, reject) => {
        let data = new opinionFeeds(obj);
        data.save().then(() => {
            return resolve();
        }).catch((err) => {
            console.log(err);
            return reject(err);
        })

    });
}

exports.removeOpinionFeeds = (data) => {
    return new Promise((resolve, reject) => {
        opinionFeeds.deleteOne( { "title" : data.title },(err, data) => {
            if (err) {
                //logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
                //logger.info('Database', 'Returning all the data');
                return resolve(data);
            }
        });

    });
}
