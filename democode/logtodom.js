(function () {
    "use strict";
    window.totalerrors = 0;

    var baseLogFunction = console.log;
    console.log = function(){
        baseLogFunction.apply(console, arguments);

        var args = Array.prototype.slice.call(arguments);
        for(var i=0;i<args.length;i++){
            var currentMessage = args[i];
            var node;
            var prefix = currentMessage && typeof currentMessage === 'string' && currentMessage.substring(0,2) === '##';
            if(prefix){
                currentMessage = currentMessage.substring(2,currentMessage.length);
                node  = createHeading(currentMessage);
            }else{
                node = createLogNode(currentMessage, 'info');
            }


            var log = document.querySelector("#mylog");
            log.appendChild(node);
        }
    }

    var baseErrorFunction = console.error;
    console.error = function(){
        baseErrorFunction.apply(console, arguments);

        var args = Array.prototype.slice.call(arguments);
        for(var i=0;i<args.length;i++){
            var node = createLogNode(args[i], 'danger');
            var log = document.querySelector("#mylog");
            log.appendChild(node);
            window.totalerrors++;
            var totalErrorsHeading = document.querySelector("#totalerrors");
            totalErrorsHeading.innerText = window.totalerrors;
        }
    }

    function createLogNode(message, type){
        var node = document.createElement("div");
        node.className = node.className + "notice notice-" + type;
        var textNode = document.createTextNode(message);
        node.appendChild(textNode);
        return node;
    }

    function createHeading(message){
        var node = document.createElement("h2");
        var textNode = document.createTextNode(message);
        node.appendChild(textNode);
        return node;
    }

    window.onerror = function(message, url, linenumber) {
        console.error("JavaScript error: " + message + " on line " +
            linenumber + " for " + url);
    };

})();
