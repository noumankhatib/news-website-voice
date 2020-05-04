// internal
const mongoose = require("mongoose");
const logger = require("../logging");
const applicantSchema = require("../model/schema");
const { v4: uuid4 } = require("uuid");
let applicantModel = mongoose.model("catagory", applicantSchema);

let insert = async (txnId, data) => {
	let obj = new applicantModel(data);
	obj = await obj.save();
	//console.log(obj);
	logger.debug(`txnid : ${txnId}, data : ${JSON.stringify(obj)}`);
	return obj.token;
};

let get = (txnId, name) => {
	return new Promise((resolve, reject) => {
		Catagory.findOne({ username: name }, function (err, result) {
			if (err) {
				//console.log(err);
				logger.error(err);
				reject(err);
			}
			//return doc;
			logger.debug(`txnid : ${txnId} data : ${JSON.stringify(result)}`);
			resolve(result);
		});
	});
};

module.exports = {
	insert,
	get
};
