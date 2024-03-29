﻿const db = require("../_helpers/db");
const { QueryTypes } = require("sequelize");

module.exports = {
    getAll,
    getById,
    getByName,
    getEmployeeLeaves,
    create,
    update,
    delete: _delete,
};

async function getAll() {
    return db.sequelize.query(
        "SELECT employee_name as title,start_date as start, end_date as end FROM leaves l, employees e where e.employee_id = l.employee_id",
        {
            type: QueryTypes.SELECT,
        }
    );
}

async function getById(leave_id) {
    return await getLeave(leave_id);
}

async function getByName(group_name) {
    let query = `
    SELECT start_date as start, end_date as end, employee_name as title, color FROM leaves l, employees e WHERE l.employee_id = e.employee_id and l.employee_id in (SELECT employee_id FROM ltdb.groups g, empgrps eg where g.group_id = eg.group_id and group_name = '${group_name}');
    `;
    return await db.sequelize.query(query, {
        type: QueryTypes.SELECT,
    });
}

async function getEmployeeLeaves(group_id, start_date, end_date) {
    return await db.sequelize.query(
        `SELECT l.start_date,l.end_date, l.employee_id FROM empgrps eg,leaves l where eg.employee_id = l.employee_id and group_id = ${group_id} and start_date BETWEEN '${start_date}' AND '${end_date}' and end_date BETWEEN '${start_date}' AND '${end_date}'`,
        {
            type: QueryTypes.SELECT,
        }
    );
}

function getDateInFormat(d) {
    var dt = new Date(d);
    var dd = dt.getDate();
    var mm = dt.getMonth() + 1;
    var yyyy = dt.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    return yyyy + "-" + mm + "-" + dd;
}

async function create(params) {
    params.start_date = getDateInFormat(params.start_date);
    params.end_date = getDateInFormat(params.end_date);

    let query = `
    SELECT * FROM leaves WHERE start_date = '${params.start_date}' AND end_date = '${params.end_date}' AND employee_id= ${params.employee_id}
    `;
    let result = await db.sequelize.query(query, {
        type: QueryTypes.SELECT,
    });

    if (Object.keys(result).length === 0) {
        await db.Leave.create(params);
    } else throw "Leave already exists!";
}

async function update(leave_id, params) {
    const leave = await getLeave(leave_id);

    Object.assign(leave, params);
    await leave.save();
}

async function _delete(leave_id) {
    const leave = await getLeave(leave_id);
    await leave.destroy();
}

async function getLeave(leave_id) {
    const leave = await db.Leave.findByPk(leave_id);
    if (!leave) throw "Leave not found";
    return leave;
}
