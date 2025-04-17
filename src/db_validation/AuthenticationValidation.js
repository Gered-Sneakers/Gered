const Joi = require('joi')

module.exports = {
    addUser(req,res,next){
        const schema = {
            name: Joi.string(),
            password: Joi.string().regex(
                new RegExp('[a-zA-Z0-9]{8,32')
            )
        }

        const {error, value } = schema.validate(req.body,schema);

        if(error){
            switch(error.details[0].context.key){
                case 'name':
                    res.status(400).send({
                         error: "This name is not valid"
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        error: "This password is not valid"
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "Bad register information"
                   });
            }
        }
        else{
            next()
        }
        //res.send(value)
    }
}