export default class State {
    static nextId() {
        if(typeof this._lastId === 'undefined')
            this._lastId = 1;
       else
            this._lastId++;
        
        return this._lastId;
    }
    
    constructor(options) {
        this._id = State.nextId();
        this._el = "";
    }
}