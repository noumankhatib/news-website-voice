let bcrypt = require('bcrypt')
let adminUser = require('../models/adminUser');
exports.insertUserRecord = (obj) => {
    return new Promise((resolve, reject) => {
        try {
            adminUser.findOne({ email: obj.email }).then(user => {
                if (user) {
                    return reject("Email already exists");
                } else {

                    const newUser = new adminUser(obj);
                    // Hash password before saving in database
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => resolve(user))
                                .catch(err => reject(err));
                        });
                    })
                }


            }).catch((error) => {

                return reject(error)
            });
        } catch (err) {
            return reject(error)
        }

    })
}

exports.authenticateUser = function (data) {
    return new Promise((resolve, reject) => {
        //console.log("user"+JSON.stringify(data))
        User.findOne({ email: data.email }).then(user => {
            // Check if user exists
            if (!user) {
                return ({ emailnotfound: "Email not found" });
            }
            // Check password
            bcrypt.compare(data.password, user.password).then(isMatch => {
                if (isMatch) {
                    logger.info('Database', 'Returning all the data');
                    return resolve(user);
                } else {
                    return reject("Authentication Failed")
                }
            });
        })
    })
}