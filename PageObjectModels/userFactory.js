// This Factory is not used in the framework, this is just an example of possible implementation

const Login = require('../pageObjectModels/loginComponent.js');

var userFactory = function(){

    var _this = this;

    _this.getPage = function (page) {

        var pages = {

'login': Login

        };

        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        };

    };
};

module.exports = userFactory;