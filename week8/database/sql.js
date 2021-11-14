import mysql from "mysql2";
//database 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "ajdcjddl12!", //mysql 비밀번호
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
//async / await 사용
//async - await가 끝날때까지 기다려주겠다.
const promisePool = pool.promise();

//select query
//async 존재시 await가 끝날때 까지 wait해주겠다.
export const selectSql = {
  //외부에서 함수를 불러오려면 export를 사용하여야 한다.
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`);
    //employee 테이블
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`);
    return rows;
  },
};
//insert query
//외부에서 함수 쓰기위해 export
export const insertSql = {
  //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  setEmployee: async (data) => { // 어떠한 데이터를 입력할건지 받는다.
    //쿼리문
    //``백틱은 변수를 사용 위해서 씀 - 단순한 텍스트문
    const sql = `insert into employee values(
            "${data.Fname}","${data.Minit}","${data.Lname}","${data.Ssn}", "${data.Bdate}","${data.Address}","${data.Sex}","${data.Salary}
            ","${data.Super_ssn}","${data.Dno}")`;
    await promisePool.query(sql); //sql문을 사용한다.
  },
  setDepartment: async (data) => {
    const sql = `insert into department values(
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}")`;
    await promisePool.query(sql);
  },
}; // 쿼리문을 만들어서 그 값을 넘겨준다는 의미

//update query
//조건을 설정해 줘야 함 where
export const updateSql = {
  updateEmployee: async (data) => {
    //where 조건을 만족하는 행에 대해서 salary 수정
    const sql = `update employee set salary = "10000" where Dno = "1" `;
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    const sql = `update department set dname = "${data.Dname}"where Dnumber="2"`;
    await promisePool.query(sql);
  },
};
