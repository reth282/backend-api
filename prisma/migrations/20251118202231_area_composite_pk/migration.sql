/*
  Warnings:

  - The primary key for the `Area` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Area" DROP CONSTRAINT "Area_pkey",
ADD CONSTRAINT "Area_pkey" PRIMARY KEY ("userId", "id");
