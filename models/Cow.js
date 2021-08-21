const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CowSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    farmer_name: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    cow_id: {
        type: String,
        // required: true
    },
    origin: {
        type: String
    },
    purchase_date: {
        type: Date
    },
    selling_price: {
        type: String,
        // required: true
    },
    weight: {
        type: String
    },
    cow_image: {
        type: String,
        // required: true
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Cow = mongoose.model("cow", CowSchema);