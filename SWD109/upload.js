const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
    var form = new IncomingForm();

form.on('file', (field, file) => {
    // file.path = __dirname + 'C:/Users/Administrator/SWD109Uploads' + file.name;
    console.log('Uploaded ' + file.name);
});
form.on('end', () => {
    res.json();
});
form.parse(req);
};