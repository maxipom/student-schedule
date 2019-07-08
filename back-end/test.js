let contadorSubject = 0;

start();


function showCardByLessonId(result, lessonId) {
    let SUBJECT_NAME;
    let PROFESSORS_NAMES;
    let CLASSROOMS_NAMES;

    const cards = result['timetable']['cards']['card'];
    const uniqueCard = cards.find((card) => {
        return (card['_attributes']['lessonid'] === lessonId)
    });

    const classrooms = result['timetable']['classrooms']['classroom'];
    const classroomsIds = uniqueCard['_attributes']['classroomids'].split(',');
    let classroomsNames = [];
    classrooms.forEach((classrom) => {
        const classroomId = classrom['_attributes']['id'];
        if (classroomsIds.indexOf(classroomId) >= 0) {
            classroomsNames.push(classrom['_attributes']['short']);
        }
    });
    CLASSROOMS_NAMES = classroomsNames;

    const leassons = result['timetable']['lessons']['lesson'];
    const uniqueLesson = leassons.find((lesson) => {
        return (lesson['_attributes']['id'] === uniqueCard['_attributes']['lessonid'])
    });

    const teachers = result['timetable']['teachers']['teacher'];
    const lessonTeacherIds = uniqueLesson['_attributes']['teacherids'].split(',');
    let lessonsTeachersNames = [];
    teachers.forEach((teacher) => {
        const teacherId = teacher['_attributes']['id'];
        if (lessonTeacherIds.indexOf(teacherId) >= 0) {
            lessonsTeachersNames.push(teacher['_attributes']['short']);
        }
    });

    PROFESSORS_NAMES = lessonsTeachersNames.join(' / ');

    const subjects = result['timetable']['subjects']['subject'];
    const uniqueSubject = subjects.find((subject) => {
        return (subject['_attributes']['id'] === uniqueLesson['_attributes']['subjectid'])
    });
    SUBJECT_NAME = uniqueSubject['_attributes']['short'];

    console.log('••--------------------------------------------------------------••');
    console.log('       PROFESSORS_NAMES:    ' + PROFESSORS_NAMES);
    console.log('       SUBJECT_NAME:      ' + SUBJECT_NAME);
    console.log('       CLASSROOM_NAME:    ' + CLASSROOMS_NAMES);
    console.log('••--------------------------------------------------------------••');
}

function getStudentByName(result, studentName) {
    const students = result['timetable']['students']['student'];
    return students.find((student) => {
        return (student['_attributes']['name'] === studentName)
    });
}

function getStudentClassId(student) {
    return student['_attributes']['classid'];
}

function getLessonsByClassId(lessons, studentClassId) {
    return lessons.filter((lesson) => {
        const classIdsString = lesson['_attributes']['classids'].split(',');
        const isClassInLesson = classIdsString.indexOf(studentClassId) >= 0;
        return isClassInLesson;
    });
}

function getSubjectsByStudentId(subjects, studentId) {
    return subjects.filter((subject) => {
        return (subject['_attributes']['studentid'] === studentId)
    });
}

function _isSubjectInLesson(lesson, subjectsByStudentId) {
    let founded = false;
    subjectsByStudentId.forEach((subject) => {
        if (lesson['_attributes']['subjectid'] === subject['_attributes']['subjectid']) {
            contadorSubject++;
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<SUBJECT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><>>>>>>>>>");
            console.log('LESSON-SUB_ID: ' + lesson['_attributes']['subjectid'] + ' - SUBJECT_ID: ' + subject['_attributes']['subjectid']);
            console.log('LESSON-SEM_ID: ' + lesson['_attributes']['seminargroup'] + ' - SUBJECT_SEMINAR_ID: ' + subject['_attributes']['seminargroup'])
        }
        /*        if(lesson['_attributes']['seminargroup'] === subject['_attributes']['seminargroup']){
                    console.log(">>>>>>>>>>>>SEMINAR GROUP<<<<<<<<<<<<<<<");
                }*/
        if (lesson['_attributes']['subjectid'] === subject['_attributes']['subjectid'] && lesson['_attributes']['seminargroup'] === subject['_attributes']['seminargroup']) {
            console.log("<<<<<<<<<<<<<<<PASOO>>>>>>>>>>>>>>>>>>");
            founded = true;
        }
    });
    return founded;
}

function getLessonsBySubjectsId(lessonsByClassId, subjectsByStudentId) {
    return lessonsByClassId.filter(
        (lesson) => {
            return _isSubjectInLesson(lesson, subjectsByStudentId);
        }
    );
}

function getStudentId(student) {
    return student['_attributes']['id'];
}

function _showStudentCardsByName(result, studentName) {
// Find the id of the student class
    const student = getStudentByName(result, studentName);
    const studentClassId = getStudentClassId(student);
    // Find the lessons with that class
    const lessons = result['timetable']['lessons']['lesson'];
    const lessonsByClassId = getLessonsByClassId(lessons, studentClassId);
    // Find the student subjects
    const subjects = result['timetable']['studentsubjects']['studentsubject'];
    const studentId = getStudentId(student);
    const subjectsByStudentId = getSubjectsByStudentId(subjects, studentId);
    // Find the class-lessons that have that subject
    const lessonsBySubjectsId = getLessonsBySubjectsId(lessonsByClassId, subjectsByStudentId);
    // Find the idlessons that have that subject-class-lessons
    const lessonsIds = [];
    lessonsBySubjectsId.forEach((lesson) => {
        lessonsIds.push(lesson['_attributes']['id']);
        console.table(lesson);
    });
    let contador = 0;
    lessonsIds.forEach(
        (lessonId) => {
            showCardByLessonId(result, lessonId);
            contador++;
        }
    );
    console.log('CONTADOR: ' + contador);
    console.log('CONTADOR SUBJECT: ' + contadorSubject);
    console.log('STUDENT NAME: ' + studentName);
}

async function start() {
    var convert = require('xml-js');
    var xml = require('fs').readFileSync('./base.xml', 'utf8');
    var result = convert.xml2js(xml, {compact: true, spaces: 3});

    // const studentName = '20180007';
    // const studentName = '20110037';
    // const studentName = '20170135';
    const studentName = '20170140';
    _showStudentCardsByName(result, studentName);


}

