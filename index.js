var Parent = function(name){
    this.name = name || 'Ivan';
};

Parent.prototype.say = function(){
    return console.log(this.name);
};

//var human = new Parent();

var Child = function(name){

};

function inherit(Child, Parent){
    Child.prototype = new Parent();
}

inherit(Child, Parent);
//var human = new Parent();
//human = {name: 'Ivan'}.__proto__ = {say: ....}.__proto__ = Object.prototype
var childHuman = new Child();
//childHuman = {}.__proto__ = {name: 'Ivan'}.__proto__ = {say: ....}.__proto__ = Object.prototype

childHuman.say();