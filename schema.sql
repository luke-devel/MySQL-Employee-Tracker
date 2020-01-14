CREATE DATABASE `employee_trackerdb`;

USE employee_trackerdb;

CREATE TABLE `department`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(30) DEFAULT NULL,
  PRIMARY KEY
(`id`)
)

CREATE TABLE `employee`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar
(30) DEFAULT NULL,
  `last_name` varchar
(30) DEFAULT NULL,
  `role_id` int
(11) DEFAULT NULL,
  `manager_id` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`id`)
)

CREATE TABLE `role`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `title` varchar
(30) DEFAULT NULL,
  `salary` decimal
(10,0) DEFAULT NULL,
  `department_id` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`id`)
)
