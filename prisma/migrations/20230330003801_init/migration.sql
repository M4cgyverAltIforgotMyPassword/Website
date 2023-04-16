/*
  Warnings:

  - You are about to drop the `PetitionCookiePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PetitionCookiePost";

-- CreateTable
CREATE TABLE "petitionCookiePosts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "comments" TEXT,

    CONSTRAINT "petitionCookiePosts_pkey" PRIMARY KEY ("id")
);
