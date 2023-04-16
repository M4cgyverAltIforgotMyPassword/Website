/*
  Warnings:

  - You are about to drop the `petitionCookiePosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "petitionCookiePosts";

-- CreateTable
CREATE TABLE "PetitionCookiePosts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "comments" TEXT,

    CONSTRAINT "PetitionCookiePosts_pkey" PRIMARY KEY ("id")
);
