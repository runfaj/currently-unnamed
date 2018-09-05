/**
 *  Creates a virtual dom node and the actual dom node associated
 **/
export default class vNode {
    /**
     *  static methods
     **/
    //gets the next unique id
    static nextId() {
        if(typeof this._lastId === 'undefined')
            this._lastId = 1;
       else
            this._lastId++;
        
        return this._lastId;
    }
    
    /**
     *  class internal
     **/
    constructor(elName /* string | element */, attrs /* object */, ...children /* strings */) {
        Object.assign(this, { elName, attrs, children });
        
        this._id = vNode.nextId();
        this.renderNode();
        
        console.log(this);
    }
    
    /**
     *  util methods
     **/
    //append this raw element to another raw element
    appendTo(parent) {
        if(parent instanceof vNode)
            parent = parent._el;
            
        parent.appendChild(this._el);
    }
    
    //create the raw element along with any children
    createElement(vNodeData) {
        let el = null;
        let { elName, attrs, children } = vNodeData;
        
        if(typeof vNodeData === 'string')
            return document.createTextNode(vNodeData);

        if(typeof elName === 'string')
            el = document.createElement(elName);
        else
            el = elName;

        if(attrs !== null && typeof attrs === 'object' && !(attrs instanceof Array))
            Object.keys(attrs).forEach(a=>el.setAttribute(a, attrs[a]));

        children.forEach(child=>el.appendChild(this.createElement(child)));

        return el;
    }
    
    //render the virtual node as dom element
    renderNode() {
        this._el = this.createElement(this);
    }
}