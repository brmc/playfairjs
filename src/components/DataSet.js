class DataSet {
    constructor(label, values) {
        this.label = label;
        this.data = values;
    }

    setData(dataObj) {
        this.data = dataObj;

        return this;
    };

    setLabel(lbl) {
        this.label = lbl;

        return this;
    };
}

module.exports = DataSet;