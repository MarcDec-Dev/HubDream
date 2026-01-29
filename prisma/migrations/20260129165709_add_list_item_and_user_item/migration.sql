/*
  Warnings:

  - A unique constraint covering the columns `[userId,itemId]` on the table `ExternalLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemId` to the `ExternalLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listId` to the `UserItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExternalLink" ADD COLUMN     "itemId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserItem" ADD COLUMN     "listId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExternalLink_userId_itemId_key" ON "ExternalLink"("userId", "itemId");

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalLink" ADD CONSTRAINT "ExternalLink_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
