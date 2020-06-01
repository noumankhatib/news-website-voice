var express = require('express'),
    router = express.Router(),
    dataController = require('./controller/DataController');

router.get('/category/getAll', function (req, res) {
   logger.info('getAllData')
    return dataController.getAllData(req, res);
});
router.get('/category/get/:username', function (req, res) {
    logger.info('getData')
    return dataController.getData(JSON.parse(req.params.username), res);
});

router.put('/category/update', function (req, res) {
  logger.info('updateData')
    return dataController.updateData(req, res);
});

router.delete('/category/remove', function (req, res) {
   logger.info('removeData')
    return dataController.removeData(req, res);
});


router.post('/category/create', function (req, res) {
 logger.info('create')
    return dataController.insertData(req.body, res);
});

/**
 * article feeds
 */

router.get('/articles/getAllArticles', function (req, res) {
 logger.info('getAllArticles')
  return dataController.getAllArticles(req, res);
});
router.post('/articles/getArticles', function (req, res) {
  logger.info('getArticles')
  return dataController.getArticles(req, res);
});

router.put('/articles/updatesArticles', function (req, res) {
logger.info('updatesArticles')
  return dataController.updateArticles(req, res);
});

router.delete('/articles/removeArticles', function (req, res) {
 logger.info('removeArticles')
  return dataController.removeArticles(req, res);
});


router.post('/articles/createArticles', function (req, res) {
logger.info('insertArticles')
  return dataController.insertArticles(req.body, res);
});



module.exports = router;
