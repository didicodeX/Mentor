import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers:[SubjectService]
})
export class SubjectModule {}
