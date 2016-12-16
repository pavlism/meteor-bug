//This object represent an order (both tehc and non-tech)
//It is mainly used to store data but can also handle changeing the status of an order
var log = new Logger('PolymerObj.js', CLL.error);

PolymerObj = function (objectName) {
    if (Lib.JS.isUndefinedOrEmpty(objectName)) {
        log.error("Constructor: A PolymerObj requires that it's tag name (.is value) be passed.")
    }
    this.is = objectName;

    this.isReadOnly = function (readonly) {
        if (readonly === true || readonly === 1 || readonly === '1' || readonly.toString().toLowerCase() === "true") {
            return true;
        } else {
            return false;
        }
    };
    this.isNotReadOnly = function (readonly) {
        return !this.isReadOnly(readonly);
    };
    this.print = function (input) {
        console.log(JSON.stringify(input));
    };


    this.properties = {};
    this.listeners = {};
};

PolymerObj.prototype.addFunction = function (functionName, functionReference) {
    if (Lib.JS.isUndefinedOrEmpty(functionName)) {
        log.error("addFunction: You must pass in a valide function name");
    }

    if (Lib.JS.isUndefinedOrEmpty(functionReference) || !Lib.JS.isFunction(functionReference)) {
        log.error("addFunction: You must pass in a valide function reference");
    }

    this[functionName] = functionReference;
};
PolymerObj.prototype.addListener = function (event, functionName) {
    if (Lib.JS.isUndefinedOrEmpty(event)) {
        log.error("addListener: You must pass in a valide event as a string");
    }
    ;

    if (Lib.JS.isUndefinedOrEmpty(functionName)) {
        log.error("addListener: You must pass in a valide function name as a string");
    }
    ;

    if (Lib.JS.isUndefined(this.functionName)) {
        log.warn("addListener: The function being added does not esist");
    }
    ;

    if (Lib.JS.isUndefined(this.listeners)) {
        this.listeners = {};
    }

    this.listeners[event] = functionName;
};
PolymerObj.prototype.addProperty = function (property, object) {
    if (Lib.JS.isUndefinedOrEmpty(property)) {
        log.error("addProperty: You must pass in a valide property");
    }
    ;

    if (Lib.JS.isUndefined(object)) {
        log.error("addProperty: You must pass in a valid object");
    }
    ;

    if (Lib.JS.isUndefined(this.properties)) {
        this.properties = {};
    }

    this.properties[property] = object;
};
