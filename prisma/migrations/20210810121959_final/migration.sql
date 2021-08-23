-- AlterTable
ALTER TABLE `home` MODIFY `shortDesc` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `provider` MODIFY `homePosted` BIGINT NOT NULL DEFAULT 0;
