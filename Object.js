if(Object.prototype.isEmpty === undefined) {
  Object.prototype.isEmpty = function(o) {
		if(!Object.isObject(o)) throw "TypeError: Argument is not an object.";
		return(Object.keys(o).length === 0); 
  };
}

if(Object.prototype.isObject === undefined) {
  Object.prototype.isObject = function(o) {
    if(typeof(o) !== "object") return false;
		return(Array.isArray(o) || o === null) ? false : true;
  };
}

if(Object.prototype.isEqual === undefined) {
  Object.prototype.isEqual = function(o1, o2) {
    if(!Object.isObject(o1) || !Object.isObject(o2)) return false;
    const keysO1 = Object.keys(o1);
    const keysO2 = Object.keys(o2);

    // Ensure they're in the same order.
    keysO1.sort();
    keysO2.sort();

    // They're both empty.
    if(Object.isEmpty(o1) && Object.isEmpty(o2)) return true;

    // Have different sets of keys.
    if(keysO1.toString() !== keysO2.toString()) return false;

    // Values within the keys are different.
    return keysO1.every((elm, count, arr) => o1[elm] === o2[elm]);
  };
}
