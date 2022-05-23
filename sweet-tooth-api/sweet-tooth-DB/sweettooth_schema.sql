DROP DATABASE IF EXISTS `sweettooth`;
CREATE DATABASE `sweettooth`;
USE `sweettooth`;

CREATE TABLE email
    (
        email_id TINYINT AUTO_INCREMENT,
        email VARCHAR(200) NOT NULL,
        CONSTRAINT pk_email PRIMARY KEY (email_id)
    );

CREATE TABLE payment
    ( 
        payment_id TINYINT AUTO_INCREMENT,
        card_number VARCHAR(16),
        name_on_card VARCHAR(50),
        expiration_date VARCHAR(5),
        cvv VARCHAR(3) NOT NULL, 
        CONSTRAINT pk_payment PRIMARY KEY (payment_id)
    );


CREATE TABLE shipping
    (
        shipping_id TINYINT AUTO_INCREMENT,
        fName VARCHAR(30),
        lName VARCHAR(30),
        shipping_address VARCHAR(200),
        shipping_residence VARCHAR(200),
        country VARCHAR(60),
        shipping_state VARCHAR(20),
        city VARCHAR(50),
        zip VARCHAR(6),
        phone VARCHAR(11),
        CONSTRAINT pk_shipping PRIMARY KEY (shipping_id)
    );

CREATE TABLE candy_orders
    (
        order_id TINYINT AUTO_INCREMENT, 
        order_description VARCHAR(500),
        CONSTRAINT pk_order PRIMARY KEY (order_id)
    );

CREATE TABLE candy
    (
        id TINYINT AUTO_INCREMENT,
        candy_type VARCHAR(20) NOT NULL,
        candy_name VARCHAR(30),
        picture VARCHAR(500),
        candy_description VARCHAR(1000),
        price TINYINT,
        CONSTRAINT pk_candy PRIMARY KEY (id)
    );

