app.factory("RecordService", function ($rootScope, $http, Globals) {

    var _records = [{
        "_id": "999",
        "Paid": false,
        "Type": 4,
        "IsComplete": true,
        "Requester": 13,
        "WorkOrderNo": "JF898RE",
        "CompleteInfo": {
            "ActionNotes": "Something was put in here when it was completed",
            "RepairedBy": "Rune Fergesen",
            "ClaimNo": "999",
            "Date": new Date().toLocaleString(),
            "Warranty": "999"
        },
        "Customer": {
            "Type": "2",
            "CustomerId": 44,
            "Company": "999",
            "IsCompany": true,
            "FirstName": "Rune999",
            "LastName": "Fergesen999",
            "Address1": "999 Street Ave",
            "Address2": "",
            "City": "Edmonds",
            "State": "WA",
            "Zip": "98023",
            "Phone1": "999-9999",
            "Phone2": "",
            "Email": "999@fakedistrictasdf.com"
        },
        "Assets": [],
        "Parts": [{
            "Type": "service",
            "Hide": false,
            "OrderNo": "Order345",
            "OrderType": "0",
            "OrderedBy": "Rune F",
            "OrderedOn": new Date().toLocaleDateString(),
            "Qty": "1",
            "PartNo": "YOUPART2",
            "Desc": "Something goes here",
            "InvoiceNo": "",
            "Cost": "30.00",
            "Price": "43.56",
            "ShippingCost": "2.55",
            "EscalationNo": "",
            "ShippingInfo": {
                "SentBy": "Rune F",
                "SentOn": new Date().toLocaleString(),
                "TrackingNo": "098104971092"
            },
            "ReceivingInfo": {
                "ReceivedBy": "Dude M",
                "ReceivedOn": "today"
            }
        }],
        "Labors": [],
        "Backup": 0,
        "DateCreated": "2/23/2015 3:39:00 PM"
    }, {
        "_id": "1000",
        "Paid": false,
        "Type": 7,
        "IsComplete": true,
        "Requester": 7,
        "WorkOrderNo": "OIU890Y",
        "CompleteInfo": {
            "ActionNotes": "Something was put in here when it was completed",
            "RepairedBy": "Rune Fergesen",
            "ClaimNo": "1000",
            "Date": new Date().toLocaleString(),
            "Warranty": "1000"
        },
        "Customer": {
            "Type": "8",
            "CustomerId": 44,
            "Company": "1000",
            "IsCompany": true,
            "FirstName": "Rune1000",
            "LastName": "Fergesen1000",
            "Address1": "1000 Street Ave",
            "Address2": "",
            "City": "Edmonds",
            "State": "WA",
            "Zip": "98023",
            "Phone1": "987-1000",
            "Phone2": "",
            "Email": "1000@fakedistrictasdf.com"
        },
        "Assets": [],
        "Parts": [{
            "Type": "service",
            "Hide": false,
            "OrderNo": "Order345",
            "OrderType": "0",
            "OrderedBy": "Rune F",
            "OrderedOn": new Date().toLocaleDateString(),
            "Qty": "1",
            "PartNo": "YOUPART2",
            "Desc": "Something goes here",
            "InvoiceNo": "",
            "Cost": "30.00",
            "Price": "43.56",
            "ShippingCost": "2.55",
            "EscalationNo": "",
            "ShippingInfo": {
                "SentBy": "Rune F",
                "SentOn": new Date().toLocaleString(),
                "TrackingNo": "098104971092"
            },
            "ReceivingInfo": {
                "ReceivedBy": "Dude M",
                "ReceivedOn": "today"
            }
        }],
        "Labors": [],
        "Backup": 0,
        "DateCreated": "2/23/2015 3:39:00 PM"
    }, {
        "_id": "1001",
        "Paid": true,
        "Type": 7,
        "IsComplete": true,
        "Requester": 7,
        "WorkOrderNo": "SDJDLD78",
        "CompleteInfo": {
            "ActionNotes": "Something was put in here when it was completed",
            "RepairedBy": "Rune Fergesen",
            "ClaimNo": "1001",
            "Date": new Date().toLocaleString(),
            "Warranty": "1001"
        },
        "Customer": {

            "CustomerId": 44,
            "Company": "1001",
            "IsCompany": true,
            "FirstName": "Rune1001",
            "LastName": "Fergesen1001",
            "Address1": "1001 Street Ave",
            "Address2": "",
            "City": "Edmonds",
            "State": "WA",
            "Zip": "98023",
            "Phone1": "987-1001",
            "Phone2": "",
            "Email": "1001@fakedistrictasdf.com"
        },
        "Assets": [],
        "Parts": [{
            "Type": "service",
            "Hide": false,
            "OrderNo": "Order345",
            "OrderType": "0",
            "OrderedBy": "Rune F",
            "OrderedOn": new Date().toLocaleDateString(),
            "Qty": "1",
            "PartNo": "YOUPART2",
            "Desc": "Something goes here",
            "InvoiceNo": "",
            "Cost": "6630.00",
            "Price": "8843.56",
            "ShippingCost": "892.55",
            "EscalationNo": "",
            "ShippingInfo": {
                "SentBy": "Rune F",
                "SentOn": new Date().toLocaleString(),
                "TrackingNo": "098104971092"
            },
            "ReceivingInfo": {
                "ReceivedBy": "Dude M",
                "ReceivedOn": "today"
            }
        }],
        "Labors": [],
        "Backup": 0,
        "DateCreated": "2/23/2015 3:39:00 PM"
    }];

    return {
        NewRecord: function(){
            var r = {
                "_id": "",
                "Paid": false,
                "Type": 7,
                "IsComplete": false,
                "Requester": Globals.User().id,
                "WorkOrderNo": "",
                "CompleteInfo": {
                    "ActionNotes": "",
                    "RepairedBy": "",
                    "ClaimNo": "",
                    "Date": null,
                    "Warranty": ""
                },
                "Customer": {
                    "Company": '',
                    "CustomerId": 0,
                    "IsCompany": false,
                    "FirstName": "",
                    "LastName": "",
                    "Address": "",
                    "Address2": "",
                    "City": "",
                    "State": "",
                    "Zip": "",
                    "Phone1": "",
                    "Phone2": "",
                    "Email": ""
                },
                "Assets": [],
                "Parts": [],
                "Labors": [],
                "Backup": 0,
                "DateCreated": new Date().toLocaleString()
            };
            return r;
        },
        GetRecordById: function (recordId) {
            var r = _.findWhere(_records, { _id: recordId });

            if (r == undefined) {
                // go get it from server
            } else {
                return r;
            }
        },
        GetMostRecentRecord: function () {
            return _records[_records.length - 1];
        },
        GetNextRecord: function (lastRecordId) {
            var i = _.findLastIndex(_records, { _id: lastRecordId });
            return _records[i + 1];
        },
        GetPrevRecord: function (lastRecordId) {
            var i = _.findLastIndex(_records, { _id: lastRecordId });
            return _records[i - 1]
        }
    }

});
