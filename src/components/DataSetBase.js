class BaseDataSet {
    /**
     * @param {String} label
     * @param {[]} values
     */
    constructor(label, values) {
        this.label = label;
        this.data = values;
    }

    /**
     *
     * @param {[]} data
     * @returns {BaseDataSet}
     */
    setData(data) {
        this.data = data;

        return this;
    };

    /**
     *
     * @param {String} lbl
     * @returns {BaseDataSet}
     */
    setLabel(lbl) {
        this.label = lbl;

        return this;
    };

    /**
     *
     * @returns {BaseDataSet}
     */
    clearData() {
        this.data = [];

        return this;
    }
}

module.exports = BaseDataSet;