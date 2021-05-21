const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/peoples', PersonController.findAllPeople);
    app.delete('/api/delete/:id', PersonController.deleteAnExistingPerson);
}