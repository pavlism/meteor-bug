Template.UGCheckBox.onRendered(function () {
    EventBroker.listen("_UG-Check-Box_changed", function (listenerArgs, triggerArgs) {
        console.log('a UG-Check-Box box was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("secondBox_UG-Check-Box_changed", function (listenerArgs, triggerArgs) {
        console.log('a UG-Check-Box box was clicked with the id = secondBox');
        console.log(triggerArgs);
    });
});
