INSERT INTO employees
(emp_id,
emp_name,
job_name,
manager_id,
hire_date,
salary,
dep_id)
VALUES
(69320,
"ABHI LASH",
"CLERK",
67832, 
"1991-01-23",
1400.00,
 1001);
select * from employees;
select salary from employees;
select  distinct job_name from employees;
SELECT emp_name,CONCAT('$',ROUND(1.15*salary)) As"salary"FROM employees;
select concat(emp_name,"    ",job_name) As "EMPLOYEE & JOB"from employees;
select emp_id,emp_name,salary, DATE_FORMAT(hire_date, "%M %d %Y") AS "date_format" from employees;
select LENGTH(TRIM(emp_name))As "length" from employees;
select emp_id,salary,commission from employees;
select DISTINCT dep_id,job_name from employees;
SELECT * FROM employees WHERE dep_id NOT IN (2001);
SELECT * FROM employees WHERE hire_date<('1991-1-1');
select avg(salary) AS "avg" from employees where job_name="ANALYST";
select * from employees where emp_name="BLAZE";
select * from employees where salary*1.25>3000;
SELECT * FROM employees WHERE DATE_FORMAT(hire_date, '%M')='JANUARY';
SELECT * FROM employees WHERE hire_date<('1991-04-01');
insert into salary_grade(grade,min_salary,max_salary) VALUES(1,800,1300);
insert into salary_grade(grade,min_salary,max_salary) VALUES(2,1301,1500);
insert into salary_grade(grade,min_salary,max_salary) VALUES(3,1501,2100);
insert into salary_grade(grade,min_salary,max_salary) VALUES(4,2101,3100);
insert into salary_grade(grade,min_salary,max_salary) VALUES(5,3101,9999);
select * from salary_grade;







