/*
  Warnings:

  - The primary key for the `Area` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Area` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Area_name_key";

-- AlterTable
ALTER TABLE "Area" DROP CONSTRAINT "Area_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "updatedAt",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Area_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Area_id_seq";
