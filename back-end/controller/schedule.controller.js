const StudentService = require('../services/student.service');
const LessonService = require('../services/lesson.service');

class ScheduleController {
    constructor(mainSource) {
        this.studentService = new StudentService(mainSource['timetable']['students']['student']);
        this.lessonService = new LessonService(mainSource['timetable']['lessons']['lesson']);
    }

    async getStudentCards(studentName) {
        this._showStudentCardsByName(studentName);
    }

    _showStudentCardsByName(studentName) {
        // Find the id of the student class
        const student = this.studentService.getStudentByName(studentName);
        console.log('STUDENT');
        console.table(student); // TODO: Delete this

        // Find the lessons with that class
        const lessons = this.lessonService.getLessonsByClassId(student.classId);
        console.log('LESSONS');
        console.log(lessons.length); // TODO: Delete this
        // // Find the student subjects
        // const subjects = result['timetable']['studentsubjects']['studentsubject'];
        // const studentId = getStudentId(student);
        // const subjectsByStudentId = getSubjectsByStudentId(subjects, studentId);
        // // Find the class-lessons that have that subject
        // const lessonsBySubjectsId = getLessonsBySubjectsId(lessonsByClassId, subjectsByStudentId);
        // // Find the idlessons that have that subject-class-lessons
        // const lessonsIds = [];
        // lessonsBySubjectsId.forEach((lesson) => {
        //     lessonsIds.push(lesson['_attributes']['id']);
        //     console.table(lesson);
        // });
        // let contador = 0;
        // lessonsIds.forEach(
        //     (lessonId) => {
        //         showCardByLessonId(result, lessonId);
        //         contador++;
        //     }
        // );
        // console.log('CONTADOR: ' + contador);
        // console.log('CONTADOR SUBJECT: ' + contadorSubject);
        // console.log('STUDENT NAME: ' + studentName);
    }

}

module.exports = ScheduleController;
