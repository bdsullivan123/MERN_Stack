const Author = require('../models/authors.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .sort({name: 1})
        .then(allTheAuthors => res.json({ authors: allTheAuthors }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.json(err.errors));
};

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json(err.errors));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};