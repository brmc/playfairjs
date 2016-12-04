let GuideLineAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.guideline = true;
    }

    showGuideline() {
        this.guideline = true;

        return this;
    };
    hideGuideline() {
        this.guideline = false;

        return this;
    };

    isGuidelineVisible() {
        return this.guideline;
    };
};

module.exports = GuideLineAPI;
