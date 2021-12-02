export function validateInputs({
    username,
    email,
    password,
    password2,
  }) {
    if (username !== undefined) {
      if (!username) return "Please write your username";
    }
    if (email !== undefined) {
      if (!email) return "Please write your e-mail";
      if (!validateEmail(email)) return "Please enter valid e-mail address";
    }
    if (username !== undefined) {
      if (!username) return "Please add your username";
    }
    if (password !== undefined) {
      if (!password) return "Please add your password";
    }
    if (password2 !== undefined) {
      if (!password2) return "Please add confirm Password";
      else if (password2 !== password) return "Password must match";
    }
  }
  
  export function validateRegistrationForm(input) {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordRepeat,
      countryCode,
      ageConfirmed,
      agreedWithTermsAndConditions,
    } = input;
    if (firstName !== undefined) {
      if (!firstName || firstName.length < 2)
        return "Please write your first name";
    }
  
    if (lastName !== undefined) {
      if (!lastName || lastName.length < 2) return "Please write your last name";
    }
  
    if (username !== undefined) {
      if (!username || username.length < 2) return "Please write your username";
    }
  
    if (email !== undefined) {
      if (!email) return "Please write your e-mail";
      if (!validateEmail(email)) return "Please enter valid e-mail address";
    }
  
    if (password !== undefined) {
      if (!password) return "Please add your password";
      if (!checkPassword(password))
        return "Password must be at least 6 characters and contain latin letter and digit";
    }
  
    if (passwordRepeat !== undefined) {
      if (!passwordRepeat) return "Please confirm password";
      else if (passwordRepeat !== password) return "Passwords must match";
    }
    if (!countryCode) return "Please select country";
    if (!agreedWithTermsAndConditions) {
      return "You must agree to terms and conditions";
    }
    if (!ageConfirmed) {
      return "You must confirm your age";
    }
    return true;
  }
  
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  export function checkPassword(input) {
    const regex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    return regex.test(input);
  }
  
  export function checkPasswordsMatch(password, repeatPassword) {
    return password === repeatPassword;
  }
  