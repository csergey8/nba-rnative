const validation = (value, rules, form) => {
  let valid = true;

  for(let rule in rules) {
    switch(rule) {
      case "isRequired":
        valid = valid && validateRequired(value)
        break;
      case "isEmail":
        valid = valid && validateEmail(value)
        break;
      case "minLength":
        valid = valid && validateMinLength(value, rules[rule])
        break;
      case "confirmPass":
        valid = valid && validateConfirmPass(value, form.password.value);
        break;
      default:
        valid = true;
    }
  }

  return valid
}

const validateRequired = (value) => {
  if(value !== '') {
    return true
  } 
  return false
}

const validateEmail = value => {
  const expression = /\S+@\S+\.\S+/;
  return expression.test(String(value).toLocaleLowerCase());
}

const validateMinLength = (value, ruleValue) => {
  if(value.length < ruleValue) {
    return false
  } 
  return true
}

const validateConfirmPass = (password, confirmPassword) => {
  return password === confirmPassword ? true : false;
}

export default validation;