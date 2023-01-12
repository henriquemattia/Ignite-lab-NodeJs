import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repositoy';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepositoory } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepositoory,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
