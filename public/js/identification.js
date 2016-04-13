function Identification (options) {
    
    var _self = this; 
    
    _self.cols = options.cols;
    
    _self.data = options.data;
    
    _self.dataTypes = findDataTypes();
    
    
}

var findDataTypes = function () {

    var isNumeric = {};
    
    var data = _self.data;

    var cols = Object.keys(data[0]);

    for (var i = 0; i < data.length; i++) {

        for (var j = 0; j < cols.length; j++) {

            var key = cols[j];

            var value = data[i][key];

            if (value == "" || value == "NaN" 
                || value == "undefined") {

                continue;

            } else {

                isNumeric[key] = checkNumeric(value);
            }
        }
    }
    
    return isNumeric;
}

function checkNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

}
