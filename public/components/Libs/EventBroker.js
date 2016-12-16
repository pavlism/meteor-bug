////The event broker is public static moderator object.  It allows any object to trigger and/or listen to custome events.
//Events must have unique string names.

var log = new Logger('EventBroker.js', CLL.error);

EventBroker = new (function () {
    this.events = [];

    /**
     * This will setup a function to fire when the event(s) is triggered
     *
     * Example:
     * EventBroker.listen('event.name', {data:1}, function (listenerArgs, triggerArgs) {
     *    do stuff;
     * });
     *
     * @param events {string/string array} event name (must be unique string) or array of unique strings
     * @param listenerArgs {object} The object the will get passed to the callback as  listenerArgs
     * @param callback {function} Function to call when event is triggered.
     */
    this.listen = function (events, listenerArgs, callback) {
        if(!Lib.JS.isString(events) && !$.isArray(events)){
            log.error("The first paramater (events) must be a string or array of strings that represents the event to listen too");
        }

        if(Lib.JS.isUndefined(listenerArgs)){
            log.error("The second paramater must be an object (listenerArgs) or the call back function")
        }

        if(!Lib.JS.isUndefined(callback) && !Lib.JS.isFunction(callback)){
            log.error("The third paramater must be an function");
        }

        if(Lib.JS.isFunction(listenerArgs)){
            callback = listenerArgs;
            listenerArgs = {};
        }

        if($.isArray(events)){
            var listeners = [];
            var eventCounter = 0;
            for(eventCounter = 0;eventCounter<events.length ;eventCounter++){
                listeners.push(addListener(events[eventCounter], listenerArgs, callback));
            }
        }else{
            return addListener(events, listenerArgs, callback);
        }
    }
    //adds a listeneter to the events array
    var addListener= function (event, listenerArgs, callback) {
        if (Lib.JS.isUndefined(EventBroker.events[event])) {
            EventBroker.events[event] = [];
        }
        var eventObj = {event:event, listenerArgs: listenerArgs, callback: callback}
        EventBroker.events[event].push(eventObj);
        return eventObj;
    }
    /**
     * This will trigger a custom event and can be listened to from anywhere else in the program
     *
     * @param events {string} event name (must be unique string) to trigger
     * @param triggerArgs {object} The object the will get passed to the listeners callback function as triggerArgs
     */
    this.trigger = function (event, triggerArgs) {
        triggerArgs = Lib.JS.setDefaultParameter(triggerArgs, {});

        if(Lib.JS.isUndefined(EventBroker.events[event])){
            return false;
        }

        var listenerCounter = 0;

        for (listenerCounter = 0; listenerCounter < EventBroker.events[event].length; listenerCounter++) {
            var listener = EventBroker.events[event][listenerCounter]
            listener.callback(listener.listenerArgs, triggerArgs);
        }
    }
    //Used to remove a listeneter, used if you only want to listen to an event once
    this.remove = function (listener) {
        Lib.JS.remove(EventBroker.events[listener.event], listener);
    }
})();
