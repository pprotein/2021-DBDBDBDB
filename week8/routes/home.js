import express from "express";
import { insertSql } from "../database/sql.js";
//데이터베이스에 데이터 삽입을 구현하는 쿼리이다.
//views폴더의 home.hbs파일과 연동한다.
//form을 구현한다.

const router = express.Router(); //express로 선언

//home.hbs파일을 찾아서 그리겠다
router.get("/", (req, res) => {
  res.render("home"); //view에서 home.hbs파일을 열어서 
}); //render - 그리겠다는 의미

router.post("/", (req, res) => { // 삽입한 값을 받아준다.
  //이곳에 저장된다.
  const vars = req.body;
  //데이터의 길이
  const var_length = Object.keys(req.body).length;
  // 웹에서 넘어오는 데이터의 길이

  //삽입을 했을 때 둘 다 post, home화면으로 넘기기 때문에
  //테이블 구별을 어떻게 하느냐
  //넘어오는 데이터 개수로 판단한다
  if (var_length > 4) {//employee
    const data = {
      //데이터 객체 생성
      //data 변수를 두 번 쓸 수 있는 이유는 둘 중 하나만 실행되기 때문.
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };
    insertSql.setEmployee(data);
    //insertsql모듈에서 setemployee를 만들어준후
    //이곳에 data라는 객체를 넘겨준다.
  } else {//department
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data);
  }
  //입력 후에 다시 홈화면으로 간다. (새로고침)
  res.redirect("/");
});

module.exports = router;
