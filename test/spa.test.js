/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
jest.mock('@rollcakejs/rollcake-mf-broker');
jest.mock('@rollcakejs/rollcake-router');

import RollCakeSpa from "../src/core/spa";
import { RollCakeMFBroker } from "@rollcakejs/rollcake-mf-broker";
import { RollCakeRouter, NAVIGATION_MODE } from "@rollcakejs/rollcake-router";

describe('RollCakeSpa', () => {
  const mockMFBroker = new RollCakeMFBroker([]);
  const mockRouter = new RollCakeRouter({
    routes: [],
    mode: NAVIGATION_MODE.HISTORY
  });

  const mockRollCakeSpa = () => new RollCakeSpa(mockMFBroker, mockRouter, document.createElement('div'));
  
  it('Should create a instance of RollCakeSpa', () => {
    const instance = mockRollCakeSpa();
    expect(instance).toBeInstanceOf(RollCakeSpa);
  });

  it('Should call MFBroker.init',() => {
    mockRollCakeSpa();
    expect(mockMFBroker.init).toHaveBeenCalledTimes(1);
  });

  it('Should call router.init',() => {
    mockRollCakeSpa();
    expect(mockRouter.init).toHaveBeenCalledTimes(1);
  });

});