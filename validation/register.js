const validator = require("validator");

const isEmpty = require("./is_empty");
module.exports = function validationRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 to 30 chararters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be between 6 to 30 characters";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
