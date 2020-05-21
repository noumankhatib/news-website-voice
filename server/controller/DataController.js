let database = require('../db/Database');
let articleDb = require('../db/articleDb');


exports.getAllData = function (req, res) {
    database.getAllData().then((data) => {
        res.status(200)
        return res.json({ 'success': true, data });
    }).catch((err) => {
        res.status(400)
        return res.json({ 'success': false, error: err });
    });
};

exports.insertData = (req, res) => {
    database.insertUser(req).then(() =>{
        res.status(200)
        return res.send({'success': false});
    }).catch(err => {
        res.status(400)
        return res.json({ 'success': false, error: err });
    })
}
exports.getData = function (data, res) {
    console.log("Welcome"+data)
    database.getData(data).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
exports.updateData = function (data, res) {
    database.updateData(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.removeData = function (data, res) {
    database.removeCatagory(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
/**
 * article Data
 */
exports.getAllArticles = function (req, res) {
    articleDb.getAllArticles().then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.insertArticles = (req, res) => {
    console.log(req)
    articleDb.insertArticles(req).then(() => {
        return res.send(200, {});
    }).catch(err => {
        return res.json({ 'success': false, error: err });
    })
}
exports.getArticles = function (data, res) {
    articleDb.getArticles(data.body,parseInt(data.query.page),parseInt(data.query.limit)).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
exports.updateArticles = function (data, res) {
    articleDb.updateArticles(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.removeArticles = function (data, res) {
    articleDb.removeArticles(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
