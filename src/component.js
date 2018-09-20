import vNode from './vNode.js';

export default class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
        
        this.renderComponent();
    }
    
    setState(state) {
        Object.assign(this.state, state);
        
        this._renderComponent();
    }
    
    renderComponent() {
        if(typeof this.render !== 'function')
            throw "You need to define a render method";
        
        if(!this._vNode) {
            this._vNode = new vNode(this.render(this.props, this.state));
        } else {
            const oldComponent = this._vNode;
            this._vNode = new vNode(this.render(this.props, this.state));

            //if(parent)
            //this._vNode.appendTo(parent);
            //else
            oldComponent.replaceWith(this._vNode);
        }
    }
}