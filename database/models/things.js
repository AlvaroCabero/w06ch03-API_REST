const { Schema, model } = require("mongoose");

const thingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", thingSchema);

module.exports = Thing;
