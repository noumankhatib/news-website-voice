var express = require('express'),
    router = express.Router(),
    dataController = require('./controller/DataController');

var logger = global.logger;
router.post('/getAllData', function (req, res) {
    //logger.info('getAllData')
    return dataController.getAllData(req, res);
});
router.post('/getData', function (req, res) {
     //logger.info('getData')
    return dataController.getData(req, res);
});

router.post('/updateData', function (req, res) {
   //logger.info('updateData')
    return dataController.updateData(req, res);
});

router.post('/removeData', function (req, res) {
    //logger.info('removeData')
    return dataController.removeData(req, res);
});


router.post('/create', function (req, res) {
  //logger.info('create')
    return dataController.insertData(req.body, res);
});


/**
 * News Feeds
 */

router.post('/getAllNewsFeeds', function (req, res) {
  //logger.info('getAllNewsFeeds')
  return dataController.getAllNewsFeeds(req, res);
});
router.post('/getNewsFeeds', function (req, res) {
   //logger.info('getNewsFeeds')
  return dataController.getNewsFeeds(req, res);
});

router.post('/updateNewsFeeds', function (req, res) {
 //logger.info('updateNewsFeeds')
  return dataController.updateNewsFeeds(req, res);
});

router.post('/removeNewsFeeds', function (req, res) {
  //logger.info('removeNewsFeeds')
  return dataController.removeNewsFeeds(req, res);
});


router.post('/insertNewsFeeds', function (req, res) {
//logger.info('insertNewsFeeds')
  return dataController.insertNewsFeeds(req.body, res);
});

/**
 * Opinion Feeds
 */

router.post('/getAllOpinionFeeds', function (req, res) {
  //logger.info('getAllOpinionFeeds')
  return dataController.getAllOpinionFeeds(req, res);
});
router.post('/getOpinionFeeds', function (req, res) {
   //logger.info('getOpinionFeeds')
  return dataController.getOpinionFeeds(req, res);
});

router.post('/updateOpinionFeeds', function (req, res) {
 //logger.info('updateOpinionFeeds')
  return dataController.updateOpinionFeeds(req, res);
});

router.post('/removeOpinionFeeds', function (req, res) {
  //logger.info('removeOpinionFeeds')
  return dataController.removeOpinionFeeds(req, res);
});


router.post('/insertOpinionFeeds', function (req, res) {
//logger.info('insertOpinionFeeds')
  return dataController.insertOpinionFeeds(req.body, res);
});



module.exports = router;
