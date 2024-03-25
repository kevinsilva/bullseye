-- CreateTable
CREATE TABLE "Security" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "trend" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Security_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyTimeSeries" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,
    "volume" BIGINT NOT NULL,
    "securityId" INTEGER NOT NULL,

    CONSTRAINT "DailyTimeSeries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DailyTimeSeries" ADD CONSTRAINT "DailyTimeSeries_securityId_fkey" FOREIGN KEY ("securityId") REFERENCES "Security"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
