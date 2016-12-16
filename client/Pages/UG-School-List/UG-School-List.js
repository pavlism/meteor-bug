var schoolLoaded1 = new ReactiveObject({val: false});
var schoolLoaded2 = new ReactiveObject({val: false});
var schoolDetails1 = new ReactiveObject({Name: '', LocationID: '', MinistryID: '', ShortName: '', Address: '', City: '', Province: '', PostalCode: '', Phone: ''});
var schoolDetails2 = new ReactiveObject({Name: '', LocationID: '', MinistryID: '', ShortName: '', Address: '', City: '', Province: '', PostalCode: '', Phone: ''});

Template.UGSchoolList.onRendered(function () {
    EventBroker.listen("_schoolSelected", function (listenerArgs, triggerArgs) {
        console.log('A school was selected');
        console.log(triggerArgs);
    });
    EventBroker.listen("UGschoolList1_schoolSelected", function (listenerArgs, triggerArgs) {
        console.log('a school was selected for UGschoolList1');
        console.log(triggerArgs);
    });
});

Template.UGSchoolList.helpers({
    schoolLoaded1: function () {
        return schoolLoaded1.val;
    },
    schoolLoaded2: function () {
        return schoolLoaded2.val;
    },
    schoolDetails1: function () {
        return schoolDetails1;
    },
    schoolDetails2: function () {
        return schoolDetails2;
    }
});
