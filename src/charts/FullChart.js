let mixwith = require('mixwith');
let mix = mixwith.mix;

let ChartBase = require('./ChartBase');
let AxisAPI = require('./mixins/AxisAPI');
let DrilldownAPI = require('./mixins/DrilldownAPI');
let GroupedDataAPI = require('./mixins/GroupedDataAPI');
let RotationAPI = require('./mixins/RotationAPI');
let TooltipAPI = require('./mixins/TooltipAPI');
let UpdateAPI = require('./mixins/UpdateAPI');

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
