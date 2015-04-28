var Contact = require('../models/contact');

exports.postContact = function(req, res){
    var c = new Contact();

	c.Address = req.body.address;
	c.Address2 = req.body.address2;
	c.City = req.body.city;
	c.State = req.body.state;
	c.Zip = req.body.zip;
	c.NameFirst = req.body.fname;
	c.NameLast = req.body.lname;
	c.Company = req.body.company;
	c.Email = req.body.email;
	c.Phone1 = req.body.phone1;
	c.Phone2 = req.body.phone2;
	c.Type = req.body.type;
	c.TypeDisplay = req.body.typeDisplay;
	c.DateCreated = new Date().toLocaleString();
	c.DateModified = null;

	c.save(function(err){
		if(err){
			res.send(err);
		}else{
			res.json({ contact: c });
		}
	});
};

exports.getContacts = function (req, res) {
    Contact.find(function (err, cs) {
		if(err){
			res.send(err);
		}else{
			res.json(cs);
		}
	});
};

exports.getContact = function (req, res) {
    Contact.findById(req.params.id, function (err, c) {
		if(err){
			res.send(err);
		}else{
			res.json(c);
		}
	});
};

exports.putContact = function (req, res) {
    Contact.findById(req.params.id, function (err, c) {
		if(err){
			res.send(err);
		}else{
			c.price = req.body.price;
			c.save(function(err){
				if(err){
					res.send(err);
				}else{
					res.json(c);
				}
			});
		}
	});
};

exports.deleteContact = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
		if(err){
			res.send(err);
		}else{
			res.json({ message: 'Contact deleted'});
		}
	});
};