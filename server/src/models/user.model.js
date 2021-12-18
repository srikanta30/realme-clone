// Importing Mongoose:

const mongoose = require('mongoose');

// User Schema:

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: false},
    cart: [{ type: Object, required: false }],
    address: [{ type: Object, required: false }]
}, {
    versionKey: false,
    timestamps: true
});

// Hashing The Password:

userSchema.pre('save', function(next) {
    if(! this.isModified('password')) return next();

    const hash = bcrypt.hashSync(this.password, 8);

    this.password = hash;

    next();
});

userSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);

    return match;
}

module.exports = mongoose.model("user", userSchema);