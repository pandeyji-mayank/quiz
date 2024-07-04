const User = require('../models/User');
const errorHandler = require('../utils/errorHandler');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    errorHandler(err, res);
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    errorHandler(err, res);
  }
};
