/*
  Warnings:

  - The primary key for the `Area` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,id]` on the table `Area` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Area" DROP CONSTRAINT "Area_pkey",
ADD CONSTRAINT "Area_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "Area_userId_idx" ON "Area"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Area_userId_id_key" ON "Area"("userId", "id");
