--蜡历 积己备巩
create user'javaUser'@'localhost' indentified by 'mysql';

--DB 积己
create database javadb;

--蜡历 鼻茄 何咯
grant all privileges on javadb.* to 'javaUser'@'localhost' with
grant option;
flush privileges;

--惑前殿废
create table product(
pno int not null auto_increment,
pname varchar(50) not null,
price int not null default 0,
regdate datetime default now(),
madeby text,
primary key(pno));