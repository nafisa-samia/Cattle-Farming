const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CowSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    cow_id: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    selling_price: {
        type: String
    },
    purchase_date: {
        type: Date
    },
    current: {
        type: Boolean,
        default: false
    },
    weight: {
        type: String
    },
    color: {
        type: String
    },
    temparature: {
        type: String
    },
    humidity: {
        type: String
    },
    grass: {
        type: String
    },
    solid: {
        type: String
    },
    milking: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Cow = mongoose.model("cow", CowSchema);