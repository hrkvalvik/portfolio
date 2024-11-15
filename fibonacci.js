function fibonacci(n) {

    var output = [];
    var lastNumber = output[output.length]; 
    var secondLast = output[output.length - 2];

    console.log(lastNumber);

    if (n === 1) {
        output.push(0);
        //console.log(output);
    }

    else if (n === 2) {
        output.push(0, 1);
        console.log(output);
    }
    
    else {
        output.push(0, 1);
        
        if (output.length == n) {
            console.log("EQUAL");
        }

        else {
            output.push(1);
            console.log(output[0] + output[1]);
        }
    }

    console.log(lastNumber + secondLast);
     


}
fibonacci(3);
