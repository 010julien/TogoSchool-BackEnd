import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { GradesModule } from './grades/grades.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LibraryModule } from './library/library.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GamificationModule } from './gamification/gamification.module';

@Module({
  imports: [AuthModule, UsersModule, StudentsModule, TeachersModule, ClassesModule, GradesModule, AttendanceModule, LibraryModule, MessagesModule, NotificationsModule, GamificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
