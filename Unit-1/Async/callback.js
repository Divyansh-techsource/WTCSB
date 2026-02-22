// function aa(){
//     console.log("First");
// }
// setTimeout(aa,2000);

// setTimeout(()=>{
//     console.log("first");
// },4000);
// let count=0;
// let id=setInterval(()=>{
//     console.log("first");
//     count++;
//     if(count===5){
//         clearInterval(id);
//     }
// },2000);

// function roll(num,next,time){
//     setTimeout(()=>{
//         console.log("Roll. no. is: "+num);
//         if(next) next();
//     },time)
// }
// roll(12212,()=>{
//     console.log("wait its getting downloaded");
//     roll(12312,()=>{
//         console.log("wait its getting downloaded");
//         roll(12412,()=>{
//             console.log("wait its almost over");
//             roll(12512);
//         },3000);
//     },2000);
// },1000);
// function display(teamType,option){
//     switch(option){
//         case 1:
//             showTeam()
//     }
// }
// function showTeam(a1,a2){
//     console.log("uITeam: "+a1);
//     console.log("flutterTeam: "+a2);
//     console.log("Merged: "+a1+a2);
// }
// const uITeam=[];
// const flutterTeam=[];
// mergeTeam(uITeam,flutterTeam);


// Arrays for teams
// const uiTeam = ["HTML", "CSS", "JavaScript"];
// const flutterTeam = ["Dart", "Flutter", "Firebase"];

// // Function to display team based on type
// const display = (teamType, option) => {
//     switch (teamType) {
//         case "UI":
//             console.log("UI Team:", uiTeam);
//             break;

//         case "FLUTTER":
//             console.log("Flutter Team:", flutterTeam);
//             break;

//         case "ALL":
//             const mergedTeam = [...uiTeam, ...flutterTeam]; // spread operator
//             console.log("All Teams:", mergedTeam);
//             break;

//         default:
//             console.log("Invalid team type");
//     }
// };

// Function to show menu and teams
// const showMenu = () => {
//     console.log("UI Team Members:");
//     console.log(uiTeam);

//     console.log("\nFlutter Team Members:");
//     console.log(flutterTeam);

//     console.log("\nMerged Team Members:");
//     const merged = [...uiTeam, ...flutterTeam];
//     console.log(merged);
// };

// Function calls
// showMenu();
// display("UI");
// display("FLUTTER");
// display("ALL");