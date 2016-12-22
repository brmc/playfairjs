let c3 = require('c3');
let mixwith = require('mixwith');
let mix = mixwith.mix;
let FullChart = require('./FullChart');
let GuideLineAPI = require('./mixins/GuideLineAPI');

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
        let allData = this.series;
        let columns = [];
        let types = {};
        let axes = {};

        for (let series of allData) {
            let label = series.label;
            let data = series.data;

            data.splice(0, 0, label);
            columns.push(data);

            types[label] = series.type;
            axes[label] = series.axis;
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
                y: this.hasYAxis() ? this.yAxis.buildConfiguration() : undefined,
                y2: this.hasY2Axis() ? this.y2Axis.buildConfiguration() : undefined,
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