/*
  Warnings:

  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_id_fkey`;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `userId` INTEGER NOT NULL;
