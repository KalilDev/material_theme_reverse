'use strict';
class quantizer_wsmeans_DistanceAndIndex {
    constructor() {
        this.index = this.distance = -1;
    }
}
class quantizer_wu_Box {
    constructor() {
        this.vol = this.b1 = this.b0 = this.g1 = this.g0 = this.r1 = this.r0 = 0;
    }
}
class quantizer_wu_CreateBoxesResult {
    constructor(resultCount) {
        this.resultCount = resultCount;
    }
}
class quantizer_wu_MaximizeResult {
    constructor(cutLocation, maximum) {
        this.cutLocation = cutLocation;
        this.maximum = maximum;
    }
}