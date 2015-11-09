var GSet = function(elements){
    this.elements = elements;
};
GSet.prototype.contains = function(element){
    return element in this.elements;
};

module.exports = {
    'of': function(){
        var elements = Array.prototype.slice.call(arguments);
        return new GSet(elements);
    }
}
