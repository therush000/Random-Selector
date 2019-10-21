const csvFilePath = "./peoplecomplex.csv";
const inquirer = require("inquirer");
const _ = require("lodash");

let jsonarray = null;
const csv = require("csvtojson");

//CSV -> Json -> Array
async function extractCSV() {
  await csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      jsonarray = jsonObj;
    });

  //Writing the case statments for each command
  inquirer
    .prompt([
      {
        name: "Catagory",
        message: "From which catagory do you want a member?"
      }
    ])
    .then(answers => {
      switch (answers.Catagory) {
        case "Tech":
          let tech = _.filter(jsonarray, { Team: "Tech" });
          var names = tech.map(function(tech) {
            return tech.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;

        case "Econ":
          let econ = _.filter(jsonarray, { Team: "Econ" });
          var names = econ.map(function(econ) {
            return econ.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;

        case "Biz":
          let biz = _.filter(jsonarray, { Team: "Biz" });
          var names = biz.map(function(biz) {
            return biz.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;

        case "Ops":
          let ops = _.filter(jsonarray, { Team: "Ops" });
          var names = ops.map(function(ops) {
            return ops.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;

        case "Equity":
          let equity = _.filter(jsonarray, { Team: "Equity" });
          var names = equity.map(function(equity) {
            return equity.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;

        case "Male":
          let male = _.filter(jsonarray, { Gender: "Male" });
          var names = male.map(function(male) {
            return male.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          console.log(
            "Reminder! *at the work place both genders are treated equally*"
          );
          break;

        case "Female":
          let female = _.filter(jsonarray, { Gender: "Female" });
          var names = female.map(function(female) {
            return female.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          console.log(
            "Reminder! *at the work place both genders are treated equally*"
          );
          break;

        case "All":
          var names = jsonarray.map(function(all) {
            return all.Name;
          });
          var randomname = names[Math.floor(Math.random() * names.length)];
          console.log("Today's unlucky memeber is:" + randomname);
          break;
      }
    });
}

extractCSV();
