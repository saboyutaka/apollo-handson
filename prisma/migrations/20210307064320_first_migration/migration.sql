/*
  Warnings:

  - You are about to drop the column `createdAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cagegory_id` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contents" DROP CONSTRAINT "contents_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "contents" DROP CONSTRAINT "contents_userId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "craeted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "contents" DROP COLUMN "categoryId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "cagegory_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "contents" ADD FOREIGN KEY ("anwered_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD FOREIGN KEY ("cagegory_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
