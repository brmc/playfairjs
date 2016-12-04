var mixwith = require('mixwith');
var mix = mixwith.mix;

var ChartBase = require('./ChartBase');
var AxisAPI = require('./mixins/AxisAPI');
var DrilldownAPI = require('./mixins/DrilldownAPI');
var GroupedDataAPI = require('./mixins/GroupedDataAPI');
var RotationAPI = require('./mixins/RotationAPI');
var TooltipAPI = require('./mixins/TooltipAPI');
var UpdateAPI = require('./mixins/UpdateAPI');

/**
 * @abstract
 * @implements ChartInterface
 */
class FullChart extends mix(ChartBase)
    .with(
        AxisAPI,
        DrilldownAPI,
        GroupedDataAPI,
        RotationAPI,
        TooltipAPI,
        UpdateAPI){

    constructor(domId) {
        super(domId);
    }
}

module.exports = FullChart;
