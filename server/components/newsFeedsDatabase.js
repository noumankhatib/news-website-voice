var newsFeeds = require('../models/newsFeeds');
var logger = global.logger;

exports.getAllNewsFeeds = function () {
    return new Promise((resolve, reject) => {
        newsFeeds.find((err, data) => {
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

exports.getNewsFeeds = function (data1) {
    return new Promise((resolve, reject) => {
        newsFeeds.findOne(data1,(err, data) => {
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

exports.updateNewsFeeds = function (data) {
    return new Promise((resolve, reject) => {
        newsFeeds.updateOne( { "title" : data.title },{$set : data},(err, data) => {
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
exports.insertNewsFeeds = (obj) => {
    return new Promise((resolve, reject) => {
        let data = new newsFeeds(obj);
        data.save().then(() => {
            return resolve();
        }).catch((err) => {
            console.log(err);
            return reject(err);
        })

    });
}

exports.removeNewsFeeds = (data) => {
    return new Promise((resolve, reject) => {
        newsFeeds.deleteOne( { "title" : data.title },(err, data) => {
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
