import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { InterfaceSubject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService){}
  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Get(":id")
  findOneById(@Param("id") id: string) : InterfaceSubject{
    return this.subjectService.findOneById(+id);
  }

  @Post()
  addSubject(@Body() subject: InterfaceSubject): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject)
  }
}
