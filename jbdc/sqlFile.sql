--���� ��������
create user'javaUser'@'localhost' indentified by 'mysql';

--DB ����
create database javadb;

--���� ���� �ο�
grant all privileges on javadb.* to 'javaUser'@'localhost' with
grant option;
flush privileges;

--��ǰ���
create table product(
pno int not null auto_increment,
pname varchar(50) not null,
price int not null default 0,
regdate datetime default now(),
madeby text,
primary key(pno));