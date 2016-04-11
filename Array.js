if(Array.prototype.first === undefined) {
	Array.prototype.first = function() {
		return this[0];
	}
}

if(Array.prototype.last === undefined) {
	Array.prototype.last = function() {
		return this[this.length-1];
	}
}

if(Array.prototype.rest === undefined) {
	Array.prototype.rest = function() {
		return this.slice(1);
	}
}

if(Array.prototype.nth === undefined) {
	Array.prototype.nth = function(n) {
		return this[n];
	}
}

if(Array.prototype.generate === undefined) {
	Array.prototype.generate = function() {
		console.log(this);
	}
}
