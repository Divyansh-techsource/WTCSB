// const p = new Promise((resolve, reject) => {
//   reject("Big Block error");
//   resolve("sab theek hai");
// });
// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("error hai", error);
// });

//<----->

// console.log("1) Start");

// const p = new Promise((resolve, reject) => {
//   console.log("2) Promise created ");
//   setTimeout(() => {
//     resolve("3) Work finished");
//   }, 1000);
// });
// console.log("4) After creating promise");

// p.then((value) => {
//   console.log(value); // runs AFTER resolve(...)
//   console.log("5) then() runs only when promise is resolved");
// });

// console.log("6) End (JS keeps running; then will run later)");

//<----->

// function roll(num, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Roll. no. is " + num);
//       resolve(num); // pass value to next step
//     }, delay);
//   });
// }
// roll(12212, 1000)
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12312, 2000);
//   })
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12412, 3000);
//   })
//   .then(() => {
//     console.log("wait its almost over");
//     return roll(12512, 4000);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     console.log("Done with viva");
//   });

//<----->

// roll(12212, 1000)
//   .then(() => (console.log("downloading..."), roll(12312, 2000)))
//   .then(() => (console.log("downloading..."), roll(12412, 3000)))
//   .then(() => (console.log("almost over..."), roll(12512, 4000)))
//   .catch(console.log)
//   .finally(() => console.log("Done with viva"));


// function roll(num, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Roll. no. is " + num);
//       resolve(num);
//     }, delay);
//   });
// }

// async function run() {
//   try {
//     await roll(12212, 1000);
//     console.log("wait its getting downloaded");

//     await roll(12312, 2000);
//     console.log("wait its getting downloaded");

//     await roll(12412, 3000);
//     console.log("wait its almost over");

//     await roll(12512, 4000);
//     console.log("Finished download flow");
//   } catch (err) {
//     console.log("Error:", err);
//   } finally {
//     console.log("Done with viva");
//   }
// }

// run();

const p=new Promise((resolve,reject)=>{
    reject("Order failed");
    resolve("Order conformed");
});
function placeOrder(item,delay){
    p.then((value)=>{
        console.log(`Your ${item} is ${value}`);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        setTimeout(delay);
    });
}
function assignRider(orderId,delay){
    p.then((value)=>{
        console.log(`Rider is assigned to your ${orderId}`);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        setTimeout(delay);
    });
}
function pickupOrder(riderId,delay){
    p.then((value)=>{
        console.log("On the way");
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        setTimeout(delay);
    });
}
function deliverOrder(orderId,delay){
    p.then((value)=>{
        console.log("Delivered");
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        setTimeout(delay);
    });
}




























// Helper function for delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 1. Place Order (1s)
function placeOrder(item, time) {
    return new Promise(async (resolve, reject) => {
        await delay(time);
        const orderId = Math.floor(Math.random() * 1000);
        console.log("Order confirmed:", item);
        resolve(orderId);
    });
}

// 2. Assign Rider (2s)
function assignRider(orderId, time) {
    return new Promise(async (resolve, reject) => {
        await delay(time);
        const riderId = Math.floor(Math.random() * 100);
        console.log("Rider assigned");
        resolve({ orderId, riderId });
    });
}

// 3. Pickup Order (2s)
function pickupOrder(riderId, time) {
    return new Promise(async (resolve, reject) => {
        await delay(time);
        console.log("On the way");
        resolve(riderId);
    });
}

// 4. Deliver Order (3s)
function deliverOrder(orderId, time) {
    return new Promise(async (resolve, reject) => {
        await delay(time);
        console.log("Delivered");
        resolve("Delivery successful");
    });
}

// ----- Promise Chain -----
placeOrder("Pizza", 1000)
    .then(orderId => assignRider(orderId, 2000))
    .then(data => pickupOrder(data.riderId, 2000)
        .then(() => data.orderId))
    .then(orderId => deliverOrder(orderId, 3000))
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Tracking closed");
    });