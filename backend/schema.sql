-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Native
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Native
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Native` DEFAULT CHARACTER SET utf8 ;
USE `Native` ;

-- -----------------------------------------------------
-- Table `Native`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Native`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Native`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Native`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `message_content` LONGTEXT NULL,
  `message_emoji` LONGTEXT NULL,
  `message_image` BLOB NULL,
  `sender_id` INT NOT NULL,
  `reciver_id` INT NOT NULL,
  PRIMARY KEY (`idmessages`),
  INDEX `fk_messages_users_idx` (`sender_id` ASC) VISIBLE,
  INDEX `fk_messages_users1_idx` (`reciver_id` ASC) VISIBLE,
  CONSTRAINT `fk_messages_users`
    FOREIGN KEY (`sender_id`)
    REFERENCES `Native`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_messages_users1`
    FOREIGN KEY (`reciver_id`)
    REFERENCES `Native`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
