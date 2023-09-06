const mongoos = require("mongoose");

const contactSchema = new mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoos.model("Contact", contactSchema);
