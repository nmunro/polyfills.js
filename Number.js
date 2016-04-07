if(Number.isNumber === undefined) {
  Number.isNumber = function(o) {
    return typeof(o) === "number";
  };
}