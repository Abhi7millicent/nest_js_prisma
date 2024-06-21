import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CountryController } from './country.controller';
import { CountryService } from './country.services';
// import { PrismaModule } from 'src/database/prisma/prisma.module';
import { DatabaseModule } from 'src/database/database.module';
import CountryRepository from './country.repository';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaClient, CountryRepository, CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
