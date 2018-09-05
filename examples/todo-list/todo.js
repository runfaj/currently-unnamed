//var root = new CU();

var testNode = new vNode('div', {}, 'hi');
testNode.appendTo(document.body);
var testNode3 = new vNode('h3', {}, 'yo');
var testNode2 = new vNode('div', {class: 'hello'}, 'sup', testNode3);
testNode2.appendTo(testNode);