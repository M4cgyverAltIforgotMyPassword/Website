-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "comment" TEXT NOT NULL,
    "documentId" INTEGER NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "document_idx" ON "Posts"("documentId");
