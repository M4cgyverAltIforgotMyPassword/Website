/*
  Warnings:

  - You are about to drop the column `comments` on the `PetitionCookiePosts` table. All the data in the column will be lost.
  - Added the required column `comment` to the `PetitionCookiePosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PetitionCookiePosts" DROP COLUMN "comments",
ADD COLUMN     "comment" TEXT NOT NULL;
