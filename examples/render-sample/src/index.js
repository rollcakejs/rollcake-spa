import 'regenerator-runtime/runtime';
import { RollCakeSpa } from "../../../src/index";
import Router from "./router";
import Broker from "./broker";

new RollCakeSpa(Broker, Router, document.getElementById('root'));