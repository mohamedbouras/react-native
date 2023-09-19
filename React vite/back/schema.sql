-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema assilData
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema assilData
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `assilData` DEFAULT CHARACTER SET utf8 ;
USE `assilData` ;

-- -----------------------------------------------------
-- Table `assilData`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assilData`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `assilData`.`blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assilData`.`blog` (
  `idblog` INT NOT NULL AUTO_INCREMENT,
  `blog_title` VARCHAR(45) NOT NULL,
  `blog_description` LONGTEXT NULL,
  `blog_image` LONGTEXT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idblog`),
  INDEX `fk_blog_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_blog_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `assilData`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
