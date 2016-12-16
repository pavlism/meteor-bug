Template.Buttons.onRendered(function () {
    EventBroker.listen("_UG-Button_clicked", function (listenerArgs, triggerArgs) {
        console.log('a UG-Base-Button box was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("saveButton_UG-Button_clicked", function (listenerArgs, triggerArgs) {
        console.log('The save button was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("cancelButton_UG-Button_clicked", function (listenerArgs, triggerArgs) {
        console.log('The cancel button was clicked');
        console.log(triggerArgs);
    });

});
