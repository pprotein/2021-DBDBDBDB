import express from "express";
import { selectSql, updateSql } from "../database/sql.js";
//수정하기 위해서는 선택해서 업데이트 해야하기에 두개의 sql을 불러온다


const router = express.Router(); // 라우터기능을 사용 - express기능을 이용


router.get("/employee", async (req, res) => { // / 뒤에 붙는건 update뒤에 붙는것,
  const emp_res = await selectSql.getEmployee();//직원테이블 생성
  res.render("updateEmployee", {
    title: "직원 테이블 갱신",
    emp_res,
  });
});

router.get("/department", async (req, res) => {
  const dept_res = await selectSql.getDepartment();//부서테이블 생성
  res.render("updateDepartment", {
    title: "부서 테이블 갱신",
    dept_res,
  });
});

router.post("/employee", async (req, res) => {
  await updateSql.updateEmployee();
  res.redirect("/select");
});

router.post("/department", async (req, res) => {
  const vars = req.body; //변수를 받는다
  console.log(vars.dname); // 진짜 변수를 받았는지 console을 통해 확인한다.

  const data = {
    Dname: vars.dname,
  };
  await updateSql.updateDepartment(data);

  res.redirect("/select"); // localhost : 3000/select - 수정후 select 화면에서 조회된다
  //바꾼값이 반영되었는지 확인 가능
});

module.exports = router;
