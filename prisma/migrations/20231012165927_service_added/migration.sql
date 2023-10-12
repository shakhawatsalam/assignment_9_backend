-- CreateEnum
CREATE TYPE "ServiceAvailabality" AS ENUM ('upcomming', 'available');

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availability" "ServiceAvailabality" NOT NULL DEFAULT 'available',

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);
