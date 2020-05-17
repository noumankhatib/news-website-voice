let articles = require('../models/articleModels')
exports.getAllArticles = function () {
    return new Promise((resolve, reject) => {
        articles.find((err, data) => {
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

exports.getArticles = function (articlesSearch,page,limit) {
    return new Promise((resolve, reject) => {
        articles.paginate(articlesSearch, {page: page,limit: limit}, function(err, articlesResult) {
       // articles.find(articlesSearch).skip(skip).limit(limit).exec((err, articlesResult) => {
            if (err) {
               logger.error('Database', 'Error ocurred while getting data', err);
                return reject(err);
            } else {
                     //let result = pagination(articles,page,limit)
                
               logger.info('Database', 'Returning all the data');
                return resolve(articlesResult.docs);
            }
        });
    });
};

exports.updateArticles = function (data) {
    return new Promise((resolve, reject) => {
        articles.updateMany( { "title" : data.title,"articletype":data.articletype,"catagory":data.catagory },{$set : data},(err, data) => {
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
exports.insertArticles = (obj) => {
    return new Promise((resolve, reject) => {
        let data = new articles(obj);
        data.save().then(() => {
            return resolve();
        }).catch((err) => {
            console.log(err);
            return reject(err);
        })

    });
}

exports.removeArticles = (data) => {
    return new Promise((resolve, reject) => {
        articles.deleteMany( { "title" : data.title,"articletype":data.articletype,"catagory":data.catagory },(err, data) => {
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
