const {Schema, model} = require ("mongoose");

const userSchema = Schema ({
    user_name: {
        type: String,
        required: [true, "El nombre es obligatiro"],
    },

    email: {                                                                                                    
        type: String,
        required: [true, "E-mail obligatorio"],
    },

    phoneNumber: {
        type: Number
    },

    store: {
        type: String
    }

})

userSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("user", userSchema, "users"); 