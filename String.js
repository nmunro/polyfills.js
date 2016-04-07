if(String.isString === undefined) {
  String.isString = function(o) {
    return typeof(o) === "string";
  };
}