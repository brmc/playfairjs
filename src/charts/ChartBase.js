/**
 * @abstract
 */
class ChartBase {
    constructor(selector) {
        /**
         * @type {string}
         * @private
         */
        this.domSelector = selector;

        /**
         * @type {boolean}
         * @private
         */
        this.labels = true;

        /**
         * @type {boolean}
         * @private
         */
        this.legend = true;

        /**
         * @type {Array}
         * @private
         */
        this.dataSets = [];
    }

    setDomSelector(selector) {
        this.domSelector = selector;

        return this;
    }

    showLabels() {
        this.labels = true;

        return this;
    }

    hideLabels() {
        this.labels = false;

        return this;
    }

    areLabelsVisible() {
        return this.labels;
    }

    showLegend() {
        this.legend = true;

        return this;
    }

    hideLegend() {
        this.legend = false;

        return this;
    }

    isLegendVisible() {
        return this.legend;
    }

    setDataSets(data) {
        this.dataSets = data;

        return this;
    }

    addDataSet(data) {
        this.dataSets.push(data);

        return this;
    }
}

module.exports = ChartBase;