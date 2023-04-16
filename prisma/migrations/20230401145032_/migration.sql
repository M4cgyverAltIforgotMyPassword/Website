/*
  Warnings:

  - A unique constraint covering the columns `[sessionId,path]` on the table `Views` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Views_sessionId_path_key" ON "Views"("sessionId", "path");
