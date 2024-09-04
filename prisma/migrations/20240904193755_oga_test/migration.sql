/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `USER` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `age` INTEGER NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `USER_id_key`(`id`),
    UNIQUE INDEX `USER_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ITEM` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `category` VARCHAR(128) NOT NULL,
    `url` VARCHAR(512) NOT NULL,
    `imageUrl` VARCHAR(512) NOT NULL,
    `initialPrice` DECIMAL(10, 2) NOT NULL,
    `monthlyPrice` DECIMAL(10, 2) NOT NULL,
    `overview` TEXT NOT NULL,
    `detail` TEXT NOT NULL,

    UNIQUE INDEX `ITEM_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ORDER` (
    `orderid` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `itemID` INTEGER NOT NULL,
    `orderAt` DATETIME(3) NOT NULL,
    `idReturned` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `ORDER_orderid_key`(`orderid`),
    PRIMARY KEY (`orderid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
