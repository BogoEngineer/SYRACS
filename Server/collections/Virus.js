const mongoose = require('mongoose');


const VirusSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: [String],
            required: true,
        },
        positive_cases: {
            type: String,
            required: true
        },
        progress: {
            type: Number,
            default: false
        },
        description: {
            type: String
        },
        symptoms: {
            type: [String]
        }
    },
    {
        versionKey: false,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

var model = mongoose.model('Virus', VirusSchema);
model.collection.name = 'Virus';
module.exports = model;