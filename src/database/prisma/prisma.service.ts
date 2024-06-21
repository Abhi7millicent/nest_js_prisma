import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  debugger;

  async onModuleInit() {
    try {
      console.log('Database URL:', process.env.DATABASE_URL);
      debugger;
      await this.$connect();
      console.log('Prisma connected');
    } catch (error) {
      console.error('Error connecting to Prisma:', error);
    }
  }
}
