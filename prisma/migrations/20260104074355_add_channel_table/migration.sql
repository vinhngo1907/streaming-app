/*
  Warnings:

  - Made the column `serverId` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profileId` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `imageUrl` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Made the column `profileId` on table `Server` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Member` MODIFY `serverId` VARCHAR(191) NOT NULL,
    MODIFY `profileId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Server` ADD COLUMN `imageUrl` TEXT NOT NULL,
    MODIFY `profileId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Channel` (
    `id` VARCHAR(191) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `serverId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
