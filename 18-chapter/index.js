/**
 * @typedef {Object} User
 * @property {string} fullname - ชื่อ-นามสกุล
 * @property {number} age - อายุ
 */


/**
 * เเสดง ข้อมูลผู้ใช้
 * @param {User} user - ข้อมูลผู้ใช้
 * @param {boolean} isActive - ทำงานอยู่หรือไม่
 */

function printUser (user, isActive) {
    console.log(user.fullname);
    console.log(user.age);
    console.log(isActive ? 'true': 'false');
}

printUser({fullname:'mary', age: 20}, true);
// printUser({fullname: 'john', salary: 30})