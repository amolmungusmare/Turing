const express = require("express");
const routes = express.Router();
const {
  getDpartments,
  getDepartmentsByID,
} = require("../controller/departments");
const controllerCategory = require("./../controller/category");

routes.get("/getDepartments", getDpartments);
routes.get("/geById/:id", getDepartmentsByID);
routes.get("/getCategories", controllerCategory.getCategories);
routes.get("/getCategoryById/:id", controllerCategory.getCategoryById);
routes.get(
  "/category/inProduct/:product_id",
  controllerCategory.getProductCategory
);
routes.get(
  "/categories/inDepartment/:department_id",
  controllerCategory.getCategoryByDepartmentId
);
module.exports = routes;
