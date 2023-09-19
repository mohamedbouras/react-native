-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema finally
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema finally
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `finally` DEFAULT CHARACTER SET utf8 ;
USE `finally` ;

-- -----------------------------------------------------
-- Table `finally`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finally`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `finally`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finally`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `post_name` VARCHAR(45) NOT NULL,
  `post_image` LONGTEXT NOT NULL,
  `post_description` LONGTEXT NOT NULL,
  `post_price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idposts`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
