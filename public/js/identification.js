function Identification(options) {

    var _self = this;

    _self.cols = options.cols;

    _self.data = options.data;

    _self.attributeMeta = findDataTypes();

    _self.dataTypes = _self.attributeMeta.type;

    _self.isNumeric = _self.attributeMeta.check;

}

Identification.prototype.findDataTypes = function () {

    var dataTypes = {};
    var isNumeric = {};

    var data = _self.data;

    var cols = Object.keys(data[0]);

    for (var i = 0; i < data.length; i++) {

        for (var j = 0; j < cols.length; j++) {

            var key = cols[j];

            var value = data[i][key];

            if (value == "" || value == "NaN" ||
                value == "undefined") {

                continue;

            } else {

                isNumeric[key] = checkNumeric(value);

                if (checkNumeric(value) == true) {

                    dataTypes[key] = "number";

                } else {

                    dataTypes[key] = "string";

                }
            }

            if (key.toLowerCase().indexOf("date") >= 0) {

                isNumeric[key] = checkNumeric(value);

                dataTypes[key] = "date";

            } else if (key.toLowerCase().indexOf("time") >= 0) {

                isNumeric[key] = checkNumeric(value);

                dataTypes[key] = "time";
            }

        }
    }

    return {
        "type": dataTypes,
        "check": isNumeric
    };
}

function checkNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

}