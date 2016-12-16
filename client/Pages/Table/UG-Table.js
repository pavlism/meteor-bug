var tableData = new ReactiveArray();

Template.Table.onRendered(function () {
    tableData.length = 0;

    tableData.push(['F-Name','L-Name','Job','Birth Place']);
    tableData.push(['Mark','Pavlis','Developer','Canada']);
    tableData.push(['Thomas','Grove','Developer','Canada']);
    tableData.push(['Nhi','Somthing','Web Stuff','Viatnam']);
    tableData.push(['Lucy','Chen','Developer','China']);
    tableData.push(['Terry','Chen','Developer','China']);
    tableData.push(['Roger','Yang','Boss','China']);

    EventBroker.listen("Table1_UG-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table1 was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("Table1_UG-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table1 was double clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("Table2_UG-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table2 was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("Table2_UG-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table2 was double clicked');
        console.log(triggerArgs);
    });
});

Template.Table.helpers({
    tableData: function () {
        return JSON.stringify(tableData.toArray());
    }
});
