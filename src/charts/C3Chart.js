let c3 = require('c3');
let mixwith = require('mixwith');
let mix = mixwith.mix;
let FullChart = require('./FullChart');
let GuideLineAPI = require('./mixins/GuideLineAPI');
let DesignAPI = require('./mixins/DesignAPI');
let EventAPI = require('./mixins/EventAPI');
let Grid = require('../components/Grid');

/**
 * @implements ChartInterface
 * @extends GuideLineAPI
 */
class C3Chart extends mix(FullChart).with(GuideLineAPI, DesignAPI, EventAPI) {
    /**
     * @param {String} domId
     */
    constructor(domId) {
        super(domId);

        this.configuration = {};
        this.compiledData = {};
        this.hiddenFields = [];

        this.grid = new Grid();
    }

    /**
     * @returns {C3Chart}
     */
    compileDataSet() {
        let allData = this.dataSets;
        let columns = [];
        let types = {};
        let axes = {};

        for (let series of allData) {
            let label = series.label;
            let data = series.data;
            
            columns.push([label].concat(data));

            types[label] = series.type;
            axes[label] = series.axis;
        }

        this.compiledData = {
            url: undefined,// todo
            json: undefined,// todo,
            rows:undefined,// todo,
            columns: columns,
            mimeType:undefined,// todo,
            keys:undefined,// todo,
            x:undefined,// todo,
            xs:undefined,// todo,
            xFormat:undefined,// todo,
            xLocaltime:undefined,// todo,
            xSort:undefined,// todo,
            names:undefined,// todo,
            classes:undefined,// todo,
            type:undefined,// todo,
            order:undefined,// todo,
            regions: undefined,// todo,
            color:undefined,// todo,
            colors:undefined,// todo,
            empty: {
                labels: {
                    text:undefined,// todo,
                }
            },
            selection: {
                enabled:undefined,// todo,
                grouped:undefined,// todo,
                multiple:undefined,// todo,
                draggable:undefined,// todo,
                isselectable:undefined,// todo,
            },
            onmouseover: this.getEvent('onmouseover'),
            onmouseout: this.getEvent('onmouseout'),
            onselected: this.getEvent('onselected'),
            onunselected: this.getEvent('onunselected'),
            types: types,
            labels: this.areLabelsVisible(),
            groups: this.groups,
            axes: axes,
            onclick: this.drilldown,
            hide: this.hiddenFields
        };

        return this;
    };

    buildXAxisConfiguration() {
        let axis = this.getXAxis();

        let config = {
            type: axis.type,
            label: {
                text: axis.label,
                position: this.isRotated() ? 'outer-middle' : 'outer-center'
            }
            //tick: {
            //format: axis.getTickMarks() === undefined ? undefined : axis.getFormatter()
            //}

        };

        switch (axis.type){
            case 'categories':
                config.categories = axis.tickMarks;
                break;
            case 'timeseries':
                config.tick.values = (x) => x;

                break;
            case 'indexed':
            default:
                break;
        }

        return config;
    };

    /**
     * todo this is too library specific.  this should be moved to the chart layer
     * @returns {{show: boolean, label: {text: string, position: string}, tick: {format: Formatter}}}
     */
    buildYAxisConfiguration (axis) {
        let config = {
            show: true,
            label:   {
                text: axis.label,
                position: this.isRotated() ? 'outer-center' : 'outer-middle'
            },
            tick: {
                format: axis.formatter
            }
        };

        config.label = {
            text: axis.label,
            position: axis.position
        };

        return config;
    }

    buildY1AxisConfiguration() {
        return this.hasYAxis() ? this.buildYAxisConfiguration(this.yAxis) : undefined;
    }

    buildY2AxisConfiguration() {
        return this.hasY2Axis() ? this.buildYAxisConfiguration(this.y2Axis) : undefined;
    }

    /**
     * @returns {C3Chart}
     */
    configureChart() {
        this.configuration = {
            bindto: this.domSelector,
            data: this.compiledData,
            size: this.size,
            padding: this.padding,
            color: {
                pattern: this.colors,
                threshhold: undefined, // todo waiting for docs
            },
            interaction: {
                enabled: this.isInteractive(),
            },
            transition: {
                duration: this.transitionDuration
            },
            oninit: this.getEvent('oninit') ,
            onrendered: this.getEvent('onrendered'),
            onmouseout: this.getEvent('onmouseout'),
            onresize: this.getEvent('onresize'),
            onresized: this.getEvent('onresized'),
            axis: {
                x: this.buildXAxisConfiguration(),
                y: this.buildY1AxisConfiguration(),
                y2: this.buildY2AxisConfiguration(),
                rotated: this.isRotated()
            },
            legend: {
                position: 'right',
                show: this.isLegendVisible()
            },
            grid:{
                x: {
                    show: this.grid.areXGridLinesVisible()
                },
                y: {
                    show: this.grid.areYGridLinesVisible()
                },
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
        this.configureChart().renderChart();

    }

    renderChart() {
        this.xchart = c3.generate(this.configuration);
    };
}

module.exports = C3Chart;