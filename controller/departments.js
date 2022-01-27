const knex = require("../connection/connection");

exports.getDpartments = (req, res) => {
  knex("department")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getDepartmentsByID = (req, res) => {
  const pdata = req.params.id;
  knex("department")
    .where({ department_id: pdata })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
