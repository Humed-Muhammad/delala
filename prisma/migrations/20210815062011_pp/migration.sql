/*
  Warnings:

  - Made the column `profile` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `profile` LONGBLOB NULL DEFAULT NULL;
