require("dotenv").config();
// const inquirer = require("inquirer");
require("./database/models/things");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 5000;

initializeServer(port);

// (async () => {
//   const answers = await inquirer.prompt([
//     {
//       name: "port",
//       type: "number",
//       message: "¿En qué puerto quieres que se inicie la API?",
//       default: 4000,
//     },
//     {
//       name: "name",
//       type: "input",
//       message: "¿Cómo te llamas?",
//       default: "Luis",
//     },
//     {
//       name: "technologies",
//       type: "list",
//       message: "¿Cuáles son tus tecnologías favoritas?",
//       choices: [
//         {
//           name: "JavaScript",
//           value: "js",
//         },
//         {
//           name: "More JavaScript",
//           value: "more-js",
//         },
//         {
//           name: "More more JavaScript",
//           value: "more-more-js",
//         },
//       ],
//       default: "js",
//     },
//   ]);
//   console.log(answers);
//   initializeServer(port);
// })();
