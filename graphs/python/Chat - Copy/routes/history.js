var HistoryMessage = require('../bd/history').HistoryMessage;


exports.get = function(req, res) {
    res.render('history');
    // HistoryMessage.find().lean().exec(function (err, messages) {
    //     messages.forEach(element => {
    //         console.log(element);
    //         res.send(element);
    //     });
    //     res.send(messages);
    // });
    
    // HistoryMessage.find().lean().exec(function (err, messages) {
    //     // res.render('history', messages);
    //     res.send(messages);
    // });
};

exports.post = function(req, res) {
    console.log(req.body.ok);
    HistoryMessage.find().lean().exec(function (err, messages) {
        res.send(messages);
    });
};