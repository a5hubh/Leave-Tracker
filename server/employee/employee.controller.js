﻿const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("../_middleware/validate-request");
const authorize = require("../_middleware/authorize");
const employeeService = require("./employee.service");

// routes

router.post("/register", registerSchema, register);
router.get("/", authorize(), getAll);
router.get("/employeeGroups/:id", authorize(), getEmployeeGroups);
router.get("/:id", authorize(), getById);
router.put("/:id", authorize(), updateSchema, update);
router.delete("/:id", authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        employee_name: Joi.string().required(),
        employee_phone: Joi.string().required(),
        employee_email: Joi.string().required(),
        employee_password: Joi.string().min(6).required(),
        manager_id: Joi.number().required(),
        country_id: Joi.number().required(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    employeeService
        .create(req.body)
        .then(() =>
            res.json({
                status: 200,
                error: null,
                response: "Registered successfully!",
            })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}

function getAll(req, res, next) {
    employeeService
        .getAll()
        .then((employees) =>
            res.json({ status: 200, error: null, response: employees })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}

function getEmployeeGroups(req, res, next) {
    employeeService
        .getEmployeeGroups(req.params.id)
        .then((employees) =>
            res.json({ status: 200, error: null, response: employees })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}

function getById(req, res, next) {
    employeeService
        .getById(req.params.id)
        .then((employee) =>
            res.json({ status: 200, error: null, response: employee })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        employee_name: Joi.string().empty(""),
        employee_phone: Joi.string().empty(""),
        employee_email: Joi.string().empty(""),
        employee_password: Joi.string().min(6).empty(""),
        manager_id: Joi.number().empty(""),
        country_id: Joi.number().empty(""),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    employeeService
        .update(req.params.id, req.body)
        .then((employee) =>
            res.json({ status: 200, error: null, response: employee })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}

function _delete(req, res, next) {
    employeeService
        .delete(req.params.id)
        .then(() =>
            res.json({
                status: 200,
                error: null,
                response: "Deleted successfully!",
            })
        )
        .catch((err) => res.json({ status: 405, error: err, responce: null }));
}
