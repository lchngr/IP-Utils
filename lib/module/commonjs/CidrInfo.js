"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberHosts_1 = require("./numberHosts");
var FirstHost_1 = require("./FirstHost");
var NetworkAddress_1 = require("./NetworkAddress");
var BroadcastAddress_1 = require("./BroadcastAddress");
var CidrToMask_1 = require("./CidrToMask");
var LastHost_1 = require("./LastHost");
var Mask_1 = require("./Mask");
function cidrInfo(subnet) {
    return {
        networkAddress: NetworkAddress_1.networkAddress(subnet),
        broadcastAddress: BroadcastAddress_1.broadcastAddress(subnet),
        numberHosts: numberHosts_1.numberHosts(subnet, false),
        inclusiveNumberHosts: numberHosts_1.numberHosts(subnet, true),
        firstHostAddress: FirstHost_1.firstHost(subnet),
        lastHostAddress: LastHost_1.lastHost(subnet),
        mask: Mask_1.mask(subnet),
        cidrMask: CidrToMask_1.cidrToMask(subnet),
        contains: Function
    };
}
exports.cidrInfo = cidrInfo;