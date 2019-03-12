const Globals = require('../utilities/Globals');
const { Given, When, Then} = require('cucumber');
const Login = require('../pageObjectModels/loginComponent.js');
const Search = require('../pageObjectModels/searchComponent.js');
const Note = require('../pageObjectModels/noteComponent.js');
const CloseFile = require('../pageObjectModels/closeFileComponent.js');
const LogOut = require('../pageObjectModels/logOutComponent.js');
const globals = new Globals();
const expect = globals.expect;
const login = new Login();
const search = new Search();
const note = new Note();
const closeFile = new CloseFile();
const logOut = new LogOut();

Given('login to Web Client', function (callback) {
  login.get().then(callback);
});

When('I enter user Name', function (callback) {
  login.setName('Admin').then(callback);
});

When('I enter password', function (callback) {
  login.passwordInput('test').then(callback);
});

When('I logged in', function (callback) {
  login.buttonClick().then(callback);

});

Then('WC is opened', function () {
  return expect(login.verifyUser()).to.eventually.equal('Admin');
  
});

Given('user clicks on Search Icon', function (callback) {
  search.clickSearchIcon().then(callback);

});

When('user enter File Name', function (callback) {
  search.setFileNumber('File_2').then(callback);
 
});

When('user clicks Search Button', function (callback) {
  search.clickSearchButton().then(callback);
});

Then('File is opened', function () {
  return expect(search.verifyFileTreeName()).to.eventually.equal(true);
  
});

When('user clicks on Add Note icon', function (callback) {
  note.clickNoteIcon().then(callback);
});

Then('note modal appears', function () {
  return expect(note.verifyNoteModal()).to.eventually.equal(true);
});

When('user clicks Cancel Button', function (callback) {
  note.clickCancelButton().then(callback);
});

Then('note modal is closed', function () {
  return expect(search.verifyFileTreeName()).to.eventually.equal(true);
});

When('user click close Button', function (callback) {
 closeFile.clickCloseFile().then(callback);
});

Then('modal is closed', function () {
  return expect(closeFile.verifyCloseFile()).to.eventually.equal(true);
});

When('user click Sign Out', function (callback) {
 logOut.clicklogOut().then(callback);
});

Then('user is signed out', function () {
  return expect(logOut.verifyLogOutUrl()).to.eventually.equal(true);
});
