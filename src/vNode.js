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
        this._parentEl = null;
        this.createElement(this);
        
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
        this._parentEl = parent;
    }
    //replace this element with another
    replaceWith(newChild) {
        if(newChild instanceof vNode)
            newChild = newChild._el;
        
        if(this._parentEl)
            this._parentEl.replaceChild(this._el, newChild);
        else if(this._el.parentNode)
            this._el.parentNode.replaceChild(this._el, newChild);
        else
            console.warn('Current child node has no parent.');
    }
    
    //create the raw element along with any children
    createElement(vNodeData, parentEl=null) {
        this._el = null;
        if(parent)
            this._parentEl = parentEl;
        let { elName, attrs, children } = vNodeData;
        
        if(typeof vNodeData === 'string')
            this._el = document.createTextNode(vNodeData);

        if(typeof elName === 'string')
            this._el = document.createElement(elName);
        else
            this._el = elName;

        if(attrs !== null && typeof attrs === 'object' && !(attrs instanceof Array))
            Object.keys(attrs).forEach(a=>this._el.setAttribute(a, attrs[a]));

        children.forEach(child=>this._el.appendChild(vNodeData.createElement(child, this._el)));
    }
}