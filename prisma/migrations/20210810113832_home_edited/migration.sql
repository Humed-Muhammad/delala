/*
  Warnings:

  - Added the required column `district` to the `home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeCapacity` to the `home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeType` to the `home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomSize` to the `home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `home` ADD COLUMN `district` INTEGER NOT NULL,
    ADD COLUMN `homeCapacity` VARCHAR(191) NOT NULL,
    ADD COLUMN `homeType` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` BIGINT NOT NULL,
    ADD COLUMN `roomNumber` INTEGER NOT NULL,
    ADD COLUMN `roomSize` BIGINT NOT NULL;
