var Autowire = require('wantsit').Autowire,
    path = require('path'),
    cjson = require('cjson');

var Configuration = function (options) {
    this._logger = Autowire;

    this._config = cjson.load(path.join(__dirname, '/../config.json'));
}

Configuration.prototype.afterPropertiesSet = function () {
    this._logger.info("Configuration", "Loaded default configuration from ", path.join(__dirname, '/../config.json'));
}

Configuration.prototype._override = function (source, target) {
    Object.keys(source).forEach(function (key) {
        if (typeof source[key] == "string" || source[key] instanceof String ||
            typeof source[key] == "boolean" ||
            (!isNaN(parseFloat(source[key])) && isFinite(source[key]))) {
            target[key] = source[key];
        }

        if (Array.isArray(source[key])) {
            target[key] = source[key];
        } else if (Array.isArray(target[key])) {
            target[key] = [source[key]];
        }

        if (typeof source[key] == "object") {
            this._override(source[key], target[key]);
        }
    }.bind(this));
}

Configuration.prototype.get = function (key) {
    if (!this._config || !key) {
        return null;
    }

    var value = this._config;

    key.split(":").forEach(function (property) {
        if (value && typeof (value[property]) != "undefined") {
            value = value[property];
        } else {
            value = null;
        }
    });

    return value;
}

Configuration.prototype._arrayify = function (arg) {
    if (!arg) {
        return [];
    }

    if (Array.isArray(arg)) {
        return arg;
    }

    return [arg];
}
Configuration.prototype._defaults = function (object, defaults) {
    if (typeof object == "undefined" || object == null) {
        return defaults;
    }

    if (typeof defaults == "string" || defaults instanceof String) {
        return object ? object : defaults;
    }

    if (typeof defaults == "boolean") {
        return object ? true : false;
    }

    if (!isNaN(parseFloat(defaults)) && isFinite(defaults)) {
        return typeof object == "undefined" ? defaults : object;
    }

    if (Array.isArray(defaults)) {
        var output = [];

        object.forEach(function (entry, index) {
            output.push(this._defaults(entry, defaults[index] ? defaults[index] : defaults[0]));
        }.bind(this));

        return output;
    }

    if (typeof defaults == "object") {
        var output = {};

        Object.keys(defaults).forEach(function (key) {
            output[key] = this._defaults(object[key], defaults[key]);
        }.bind(this));

        return output;
    }

    this._logger.error("Configuration", "Don't know what to do with", object, "expected", defaults);
}

Configuration.prototype.set = function (key, value) {
    if (!this._config || !key) {
        return;
    }

    this._apply(key, value, this._config);
}

Configuration.prototype._apply = function (key, value, target) {
    var parts;

    if (key.indexOf(":") != -1) {
        parts = key.split(":");
    } else {
        parts = key.split(".");
    }

    parts.forEach(function (property, index) {
        if ((parts.length - 1) == index) {
            target[property] = value;
        } else {
            if (!target[property]) {
                target[property] = {};
            }

            target = target[property];
        }
    });
}

module.exports = Configuration;


var Autowire = require('wantsit').Autowire;

var CONFIG_FILE = __dirname + '../config.json';

Configuration = function (options) {
    this._config = cjson.load(CONFIG_FILE);
}

Configuration.prototype.afterPropertiesSet = () => {
}

Configuration.prototype._override = (source, target) => {
    Object.keys(source).forEach(function (key) {
        if (typeof source[key] == "string" || source[key] instanceof String ||
            typeof source[key] == "boolean" ||
            (!isNaN(parseFloat(source[key])) && isFinite(source[key]))) {
            target[key] = source[key];
        }

        if (Array.isArray(source[key])) {
            target[key] = source[key];
        } else if (Array.isArray(target[key])) {
            target[key] = [source[key]];
        }

        if (typeof source[key] == "object") {
            this._override(source[key], target[key]);
        }
    }.bind(this));
}

Configuration.prototype.get = (key) => {
    if (!this._config || !key) {
        return null;
    }

    var value = this._config;

    key.split(":").forEach((property) => {
        if (value && typeof (value[property]) != "undefined") {
            value = value[property];
        } else {
            value = null;
        }
    });

    return value;
}

Configuration.prototype._arrayify = (arg) => {
    if (!arg) {
        return [];
    }

    if (Array.isArray(arg)) {
        return arg;
    }

    return [arg];
}
Configuration.prototype._defaults = (object, defaults) => {
    if (typeof object == "undefined" || object == null) {
        return defaults;
    }

    if (typeof defaults == "string" || defaults instanceof String) {
        return object ? object : defaults;
    }

    if (typeof defaults == "boolean") {
        return object ? true : false;
    }

    if (!isNaN(parseFloat(defaults)) && isFinite(defaults)) {
        return typeof object == "undefined" ? defaults : object;
    }

    if (Array.isArray(defaults)) {
        var output = [];

        object.forEach(function (entry, index) {
            output.push(this._defaults(entry, defaults[index] ? defaults[index] : defaults[0]));
        }.bind(this));

        return output;
    }

    if (typeof defaults == "object") {
        var output = {};

        Object.keys(defaults).forEach(function (key) {
            output[key] = this._defaults(object[key], defaults[key]);
        }.bind(this));

        return output;
    }
}

Configuration.prototype.set = (key, value) => {
    if (!this._config || !key) {
        return;
    }

    this._apply(key, value, this._config);
}

Configuration.prototype._apply = (key, value, target) => {
    var parts;

    if (key.indexOf(":") != -1) {
        parts = key.split(":");
    } else {
        parts = key.split(".");
    }

    parts.forEach((property, index) => {
        if ((parts.length - 1) == index) {
            target[property] = value;
        } else {
            if (!target[property]) {
                target[property] = {};
            }

            target = target[property];
        }
    });
}