/*
  Warnings:

  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Posts";

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "comment" TEXT NOT NULL,
    "documentId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "document_idx" ON "Comments"("documentId");
