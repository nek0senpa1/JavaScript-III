/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding - it's the window
* 2. implicit binding - we imply that.something, this is that
* 3. new binding - new just sorta includes this as a thing
* 4. explicit - it's when you use.call.apply this goes with it
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 // ...... //
//console.log(this);


// Principle 2
console.log('Principle 2');
// code example for Implicit Binding

const tom = {
	name: "Tom",
	bashing: function(thing){
		console.log (`This is ${this.name}, they are a ${thing}!`)
	}
};

tom.bashing('cat');




// Principle 3
console.log ('Principle 3');
// code example for New Binding

function Canadian(a1,a2){
  this.greet = a1;
  this.greet2 = a2;
  this.taunt = function() {
    console.log(`I'm not your ${this.greet}, ${this.greet2}`)
  }
}

const phillip = new Canadian('buddy', 'pal');
const terrance = new Canadian('pal','friend');


phillip.taunt();
terrance.taunt();

// Principle 4
console.log('Principle 4');
// code example for Explicit Binding

phillip.taunt.call(terrance);
terrance.taunt.apply(phillip);