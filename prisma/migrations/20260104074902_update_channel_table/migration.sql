/*
  Warnings:

  - Added the required column `name` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Channel` ADD COLUMN `name` TEXT NOT NULL,
    ADD COLUMN `type` ENUM('TEXT', 'AUDIO', 'VIDEO') NOT NULL DEFAULT 'TEXT';

-- CreateIndex
CREATE INDEX `Channel_profileId_idx` ON `Channel`(`profileId`);

-- CreateIndex
CREATE INDEX `Channel_serverId_idx` ON `Channel`(`serverId`);
