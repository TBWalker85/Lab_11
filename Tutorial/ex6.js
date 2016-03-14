var promise = Promise.resolve("THIS STUFF IS RESOLVED!")

promise.then(console.log);

promise.catch(function (err) {
    console.error("THERE IS AN ERROR");
});

