import { RollCakeMFBroker } from "../../../../src/index";

const buckets = [
    {
        name: 'react-bucket',
        address: 'http://localhost:3000'
    },
    {
        name: 'vue-bucket',
        address: 'http://localhost:3001'
    }
];

export default new RollCakeMFBroker(buckets);