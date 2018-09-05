export default constraints = {
  username: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your username'
    },
  },

  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password'
    },
  },
};
