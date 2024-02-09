/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : polyteia_test

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 09/02/2024 13:08:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for numeric_data
-- ----------------------------
DROP TABLE IF EXISTS `numeric_data`;
CREATE TABLE `numeric_data`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `numeric` int NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
