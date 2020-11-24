const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict

Given("connection has been opened", () => {
    console.log("Hello World");
});