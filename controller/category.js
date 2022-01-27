const knex = require("./../connection/connection");

const getCategories = (req, res) => {
  knex("category")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getCategoryById = (req, res) => {
  const pdata = req.params.id;
  knex("category")
    .where({ category_id: pdata })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getProductCategory = (req, res) => {
  const product_id = req.params.product_id;
  knex
    .select("category.category_id", "department_id", "name")
    .from("category")
    .join("product_category", function () {
      this.on("category.category_id", "product_category.category_id");
    })
    .where("product_category.product_id", product_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getCategoryByDepartmentId = (req, res) => {
  const department_id = req.params.id;

  knex
    .select(
      "category_id",
      "department.name",
      "department.description",
      "department_id"
    )
    .from("category")
    .join("department", function () {
      this.on("category.department_id", "department.department_id");
    })
    .where("department.department_id", department_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getProductCategory,
  getCategoryByDepartmentId,
  getCategoryById,
  getCategories,
};
