# 2021-DBDBDBDB

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:djhan65/2021-db
    - (token을 사용하는 경우) git clone https://github.com/pprotein/2021-db
2. week3 폴더로 이동    
    > cd week3
3. 콘솔창(powershell)에서 npm package설치
    > npm install
4. catabase/sql.js 에서 본인의 데이터베이스 정보입력(주석부분)
<pre>
<code>
const pool = mysql.createPool(
        process.env.JAWSDB)URL ?? {
            host: 'loclahost',
            user: 'root', //본인의 mysql user id
            database: 'week3', //본인이 만든 데이터베이스 이름
            password: 'password', //본인의 mysql password
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
);
</code>
</pre>

 <br>

 ## <span style="color:red">테이블 작성법</span>

 이름|과|전공|학번
 ---|---|---|---|
 김영희|정보통신공학과|정보통신|12201111|
 홍길동|컴퓨터공학과|데이터베이스|12191111|
 이순신|인공지능학과|인공지능|12181111|

 ## 텍스트 강조

<br>

## 8주차 실습
1. 데이터베이스 생성 
2. 파일 생성 후 모듈 설치 및 파일 구성
3. 관련된 코드 작성
4. mysql에서 코드에서 작성한 테이블 생성 확인

<br>

- **EMPLOYEE**

***
>Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
>---|---|---|---|---|---|---|---|---|---|
>h|d|b|12171700|1997-10-16|인천|남|1000|NULL|1
>H|D|J|121718660|1997-03-29|korea|M|1000|121718660|1
>P|J|E|121718661|1998-11-27|Japan|F|100|12171700|2

***

<br>

- **DEPARTMENT**
    - Employee테이블에 있는 값과 연결(키연결)

***
>Dname|Dnumber|Mgr_ssn|Mgr_start_date
>---|---|---|---|
>Samsung|1|121718660|2021-10-24
>LG|2|12171700|2021-10-24
>APPLE|3|121718661|2021-10-24
***

<br>
<br>

## 10주차 실습
1. mysql 데이터베이스 및 테이블 설정
2. 소스코드를 작성
3. 임의의 테이블을 생성 후 데이터를 삽입
4. 입력된 데이터 값을 삭제 후 결과 확인
5. 웹상에서 다른 로그인 방식으로 구현해보기

- **USER**
    -사용자 계정데이터 베이스
    - admin : 관리 계정으로 로그인 시, delete페이지로 이동
    - test : 일반 사용자 계정으로 로그인 시,
    select페이지로 이동

***
>Id|Password|Role
>---|---|---|
>admin|admin1234|admin
>test|test1234|users
***

<br>

- **DEPARTMENT**

***
>Dname|Dnumber
>---|---|
>정보통신공학과|0
>컴퓨터공학과|1
>전기공학과|2
>전자공학과|3
***

<br>

- **COURSE**

***
>Course_name|Course_number|Credit_Hours
>---|---|---|
>데이터베이스설계|1|4
***

