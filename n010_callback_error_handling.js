// A callback is a function which is called when a task is completed, 
// thus helps in preventing any kind of blocking and a callback function 
// allows other code to run in the meantime. 
// Here rect takes almost 2 seconds to complete its takes. But the task is computed in 
// background. 
var rect = require('./modules/module_rectangle'); 
function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        // this gets executed once task is computed
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });

    // this line is executed before the line rect completes its task.
    console.log("This statement after the call to rect()");
};

solveRect(2,4);


// example of buitin Synchronous & Asynchronous function
// readFile() function in fs library is asynchronous. Control returns immediately to the next instruction in the program while the function keeps running in the background. A callback function is passed which gets called when the task running in the background are finished.
// readFileSync() function is synchronous and blocks execution until finished. The function blocks the program until it reads the file and then only it proceeds to end the program