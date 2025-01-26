import { Injectable } from '@nestjs/common';
import { InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  createNewSubject({ name }: InterfaceSubject): InterfaceSubject[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;
    return [...SUBJECTS, { id: newId, name: name }];
  }

  findOneById(id: number): InterfaceSubject {
    const subject = SUBJECTS.find((sub) => sub.id === id);
    if (subject) return subject;
    return {
      id: 1,
      name: "errer"
    }
  }
}
