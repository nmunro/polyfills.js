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

if(Array.generate === undefined) {
	Array.generate = function(...lst) {
		var start = (lst.length > 1) ? lst[0] : 0;
		const arr = [];
		const step = (lst[2] !== undefined) ? lst[2] : 1;
		const stop = (lst[1] !== undefined) ? lst[1] : lst[0];
		const f1 = (() => { update(() => { start += step; }); });
		const f2 = (() => { update(() => { start -= step; }); });
		const update = (cb) => {
			arr.push(start);
			cb();
		};

		const func = ((stop - start) >= 0) ?
			() => { while(start <= stop) f1(); } :
			() => { while(start >= stop) f2(); };
		func();

		return arr;
	}
}
