const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");

class CLI {
  constructor() {
    this.title = "";

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.logos = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter your name",
        },
        {
          type: "input",
          name: "width",
          message: "Enter logo width",
        },
        {
          type: "input",
          name: "height",
          message: "Enter logo height",
        },
        {
          type: "input",
          name: "centerX",
          message: "Enter logo center of shape on X axis",
        },
        {
          type: "input",
          name: "centerY",
          message: "Enter logo center of shape on Y axis",
        },
        {
          type: "input",
          name: "radius",
          message: "Enter logo shape radius",
        },
        {
          type: "input",
          name: "color",
          message: "Enter logo shape color",
        },
        {
          type: "input",
          name: "textCenterX",
          message: "Enter logo text center on the X axis",
        },
        {
          type: "input",
          name: "textCenterY",
          message: "Enter logo text center on the Y axis",
        },
        {
          type: "input",
          name: "fontSize",
          message: "Enter logo font size",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter logo text color",
        },
        {
          type: "input",
          name: "logoText",
          message: "Enter logo text value",
        },
        {
          type: "confirm",
          name: "confirmAddLogo",
          message: "Would you like to add another logo?",
        },
      ])
      .then((answers) => {
        this.title = `${answers.name}'s Logo`;
        const logo = createDocument(answers);
        return writeFile(join(__dirname, "..", "output", "logo.svg"), logo);
      })
      .then(() => console.log("Created logo.svg"))
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }

  //   addLogo() {
  //     return inquirer
  //       .prompt([
  //         {
  //           type: "input",
  //           name: "width",
  //           message: "Enter logo width",
  //         },
  //         {
  //           type: "input",
  //           name: "height",
  //           message: "Enter logo height",
  //         },
  //         {
  //           type: "input",
  //           name: "centerX",
  //           message: "Enter logo center of shape on X axis",
  //         },
  //         {
  //           type: "input",
  //           name: "centerY",
  //           message: "Enter logo center of shape on Y axis",
  //         },
  //         {
  //           type: "input",
  //           name: "radius",
  //           message: "Enter logo shape radius",
  //         },
  //         {
  //           type: "input",
  //           name: "color",
  //           message: "Enter logo shape color",
  //         },
  //         {
  //           type: "input",
  //           name: "textCenterX",
  //           message: "Enter logo text center on the X axis",
  //         },
  //         {
  //           type: "input",
  //           name: "textCenterY",
  //           message: "Enter logo text center on the Y axis",
  //         },
  //         {
  //           type: "input",
  //           name: "fontSize",
  //           message: "Enter logo font size",
  //         },
  //         {
  //           type: "input",
  //           name: "textColor",
  //           message: "Enter logo text color",
  //         },
  //         {
  //           type: "input",
  //           name: "logoText",
  //           message: "Enter logo text value",
  //         },
  //         {
  //           type: "confirm",
  //           name: "confirmAddLogo",
  //           message: "Would you like to add another logo?",
  //         },
  //       ])
  //       .then(
  //         ({
  //           width,
  //           height,
  //           centerX,
  //           centerY,
  //           radius,
  //           color,
  //           textCenterX,
  //           textCenterY,
  //           fontSize,
  //           textColor,
  //           logoText,
  //           confirmAddTask,
  //         }) => {
  //           this.logos.push({
  //             width,
  //             height,
  //             centerX,
  //             centerY,
  //             radius,
  //             color,
  //             textCenterX,
  //             textCenterY,
  //             fontSize,
  //             textColor,
  //             logoText,
  //           });
  //           if (confirmAddLogo) {
  //             return this.addLogo();
  //           }
  //         }
  //       );
  //   }
}

module.exports = CLI;
