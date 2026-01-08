-- CreateTable
CREATE TABLE `DirectMessage` (
    `id` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `fileUrl` TEXT NULL,
    `memberId` VARCHAR(191) NOT NULL,
    `conversationId` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `DirectMessage_memberId_idx`(`memberId`),
    UNIQUE INDEX `DirectMessage_conversationId_key`(`conversationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
