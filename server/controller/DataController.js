let database = require('../components/Database');
let newsFeeds = require('../components/newsFeedsDatabase');
let OpinionFeeds = require('../components/opinionFeedsDatabase')


exports.getAllData = function (req, res) {
    database.getAllData().then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.insertData = (req, res) => {
    console.log("request body"+JSON.stringify(req))
    database.insertUser(req).then(() => {
        return res.send(200, {});
    }).catch(err => {
        return res.json({ 'success': false, error: err });
    })
}
exports.getData = function (data, res) {
    database.getData(data.body).then((data) => {
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
 * News Feeds Data
 */
exports.getAllNewsFeeds = function (req, res) {
    newsFeeds.getAllNewsFeeds().then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.insertNewsFeeds = (req, res) => {
    newsFeeds.insertNewsFeeds(req).then(() => {
        return res.send(200, {});
    }).catch(err => {
        return res.json({ 'success': false, error: err });
    })
}
exports.getNewsFeeds = function (data, res) {
    newsFeeds.getNewsFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
exports.updateNewsFeeds = function (data, res) {
    newsFeeds.updateNewsFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.removeNewsFeeds = function (data, res) {
    newsFeeds.removeNewsFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

/**
 * Opinion Feeds
 */


exports.getAllOpinionFeeds = function (req, res) {
    OpinionFeeds.getAllOpinionFeeds().then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.insertOpinionFeeds = (req, res) => {
    OpinionFeeds.insertOpinionFeeds(req).then(() => {
        return res.send(200, {});
    }).catch(err => {
        return res.json({ 'success': false, error: err });
    })
}
exports.getOpinionFeeds = function (data, res) {
    OpinionFeeds.getOpinionFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};
exports.updateOpinionFeeds = function (data, res) {
    OpinionFeeds.updateOpinionFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};

exports.removeOpinionFeeds = function (data, res) {
    OpinionFeeds.removeOpinionFeeds(data.body).then((data) => {
        return res.json({ 'success': true, data });
    }).catch((err) => {
        return res.json({ 'success': false, error: err });
    });
};