import { RollCakeMFBroker } from "../../../src/index";

const buckets = [];

export default new RollCakeMFBroker({
    buckets: buckets,
    state: {}
});