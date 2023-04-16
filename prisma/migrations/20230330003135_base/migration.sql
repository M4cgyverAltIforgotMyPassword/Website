-- CreateTable
CREATE TABLE "PetitionCookiePost" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "comments" TEXT,

    CONSTRAINT "PetitionCookiePost_pkey" PRIMARY KEY ("id")
);
