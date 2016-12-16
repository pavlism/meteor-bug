var result1 = new ReactiveObject({val: ''});
var result2 = new ReactiveObject({val: ''});

Template.FormResult.onRendered(function () {
    var URL = window.location.href;
    var resultString = URL.split("?")[1];
    var results = resultString.split('&');
    result1.val = results[0];
    result2.val = results[1];
});

Template.FormResult.helpers({
    result1: function () {
        return result1.val;
    },
    result2: function () {
        return result2.val;
    }
});
