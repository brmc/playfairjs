var c3 = require('c3');
var mixwith = require('mixwith');
var mix = mixwith.mix;
var FullChart = require('./FullChart');
var GuideLineAPI = require('./mixins/GuideLineAPI');

/**
 * @implements ChartInterface
 */
class C3Chart extends mix(FullChart).with(GuideLineAPI) {
    /**
     * @param {String} domId
     */
    constructor(domId) {
        super(domId);

        this.configuration = {};
        this.compiledData = {};
        this.hiddenFields = [];
    }

    compileDataSet() {
        var allData = this.series;

        var columns = [];
        var types = {};
        var axes = {};

        for (var i in allData) {
            if (!allData.hasOwnProperty(i)) {
                continue;
            }

            var series = allData[i];

            let label = series.label;
            types[label] = series.type;

            axes[label] = series.axis;

            var data = series.data;

            data.splice(0, 0, label);

            columns.push(data);
        }

        this.compiledData = {
            columns: columns,
            types: types,
            labels: this.areLabelsVisible(),
            groups: this.groups,
            axes: axes,
            onclick: this.drilldown,
            hide: this.hiddenFields
        };

        return this;
    };

    configureChart() {
        this.configuration = {
            bindto: this.domSelector,
            data: this.compiledData,
            axis: {
                x: this.getXAxis().buildConfiguration(),
                y: this.hasLeftYAxis() ? this.leftYAxis.buildConfiguration() : undefined,
                y2: this.hasRightYAxis() ? this.rightYAxis.buildConfiguration() : undefined,
                rotated: this.isRotated()
            },
            legend: {
                position: 'right',
                show: this.isLegendVisible()
            },
            grid:{
                focus:{
                    show: this.isGuidelineVisible()
                }
            },
        };

        return this;
    };

    load() {
        this.compileDataSet()
            .configureChart()
            .renderChart();
    }

    reload() {
        this.xchart.destroy();
        this.load();
    }

    renderChart() {
        this.xchart = c3.generate(this.configuration);
    };
}

module.exports = C3Chart;