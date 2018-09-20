import State from './state';

class CU {
    constructor(options={}) {
        this.options = options;
        
        this._state = new State(options);
        console.log(this._state);
    }
}
window.CU = CU;

import Component from './component';
window.Component = Component;