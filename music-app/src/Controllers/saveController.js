let Save = require("../Models/saveModel");

module.exports.list =  function list(request, response) {
    Save.find({}).exec()
    .then(saves => {
        response.json(saves);
    });
   };
module.exports.show =  function show(request, response) {
    Save.findById(request.params.id).exec()
    .then(saves => {
        response.json(saves);
    });
   };
module.exports.create =  function create(request, response) {
    const newSave = new Save(request.body);
    newSave.save()
    .then(savedSave => {
        response.json(savedSave);
    });
   };
