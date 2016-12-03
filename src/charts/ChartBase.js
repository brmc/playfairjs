/**
 * @abstract
 */
class ChartBase {
    constructor(domId) {
        /**
         * @type {string}
         * @private
         */
        this._containerSelector = '#'+domId;

        /**
         * @type {boolean}
         * @private
         */
        this._labels = true;

        /**
         * @type {boolean}
         * @private
         */
        this._legend = true;

        /**
         * @type {Array}
         * @private
         */
        this._series = [];
    }

    getSvgSelector() {
        return this._containerSelector;
    }

    showLabels() {
        this._labels = true;

        return this;
    }

    hideLabels() {
        this._labels = false;

        return this;
    }

    areLabelsVisible() {
        return this._labels;
    }

    showLegend() {
        this._legend = true;

        return this;
    }

    hideLegend() {
        this._legend = false;

        return this;
    }

    isLegendVisibile() {
        return this._legend;
    }


    getSeries() {
        return this._series;
    }

    setDataSet(data) {
        this._series = data;

        return this;
    }

    addDataSet(data) {
        this._series.push(data);

        return this;
    }
}

module.exports = ChartBase;