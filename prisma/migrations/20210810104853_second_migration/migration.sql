/*
  Warnings:

  - Added the required column `profile` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `profile` LONGBLOB NOT NULL;

-- CreateTable
CREATE TABLE `admin` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` BIGINT NOT NULL,

    UNIQUE INDEX `admin.username_unique`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `home` (
    `id` VARCHAR(191) NOT NULL,
    `providerId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `addressOne` VARCHAR(191) NOT NULL,
    `addressTwo` VARCHAR(191) NOT NULL,
    `photo` LONGBLOB NOT NULL,
    `detailDesc` LONGTEXT NOT NULL,
    `shortDesc` TEXT NOT NULL,

    INDEX `providerId`(`providerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provider` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `phone` BIGINT NOT NULL,
    `profile` LONGBLOB NOT NULL,
    `homePosted` BIGINT NOT NULL,
    `RegisteredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `home` ADD FOREIGN KEY (`providerId`) REFERENCES `provider`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
