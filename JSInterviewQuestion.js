// closure

for (var i =0; i < 3; i++){
    const log = () => {
        console.log(i);
    }

    setTimeout(log, 100);
}

//what should be the output
// if var then 3,3,3 and if let then 0,1,2