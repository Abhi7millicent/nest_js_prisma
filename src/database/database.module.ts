import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  providers: [PrismaModule],
  exports: [PrismaModule],
})
export class DatabaseModule {}
