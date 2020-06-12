const jwt = require("jsonwebtoken");
const salt = "thisismysecretstringthelongerthebetter";

const authenticationsController = {
  login(req, res) {
    const payload = req.body;
    const token = jwt.sign(payload, salt, { expiresIn: 360000 });
    res.send({ token: `Bearer ${token}` });
  },
};

module.exports = authenticationsController;
