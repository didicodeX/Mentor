import { Injectable } from '@nestjs/common';
import { LevelSubjectInterface } from './level';
import { SubjectService } from 'src/subject/subject.service';
import { LEVELS } from './bdd';

@Injectable()
export class LevelService {
  constructor(private readonly subjectServices: SubjectService){

  }
  findLevelAndSubjectByName(name : string) : LevelSubjectInterface[]{
    const level = LEVELS.find(l => l.name === name)
    const subject = this.subjectServices.findAll();
    if (!level) {
      throw new Error(`Level with name ${name} not found`);
    }
    const filteredSubject = subject.filter(s => s.levelId === level.id);
    return filteredSubject.map<LevelSubjectInterface>(subject => ({
      subject,
      level
    }));
  }
}
