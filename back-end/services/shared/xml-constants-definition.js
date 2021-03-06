//XML tree definition
const TREE_DEF_ATTRIBUTES = '_attributes';
const TREE_DEF_MAIN_NODE = 'timetable';
const TREE_DEF_TEACHERS_NODE = 'teachers';
const TREE_DEF_LESSONS_NODE = 'lessons';
const TREE_DEF_STUDENT_NODE = 'students';
const TREE_DEF_CARDS_NODE = 'cards';
const TREE_DEF_CLASSES_NODE = 'classes';
const TREE_DEF_CLASSROOMS_NODE = 'classrooms';
const TREE_DEF_SUBJECTS_NODE = 'subjects';
const TREE_DEF_PERIODS_NODE = 'periods';
const TREE_DEF_DAYSDEFS_NODE = 'daysdefs';
const TREE_DEF_STUDENTSUBJECTS_NODE = 'studentsubjects';

//Card XML node definition
const CARD_TABLE_NAME = 'card';
const CARD_CLASSROOM_IDS = 'classroomids';
const CARD_LESSON_ID = 'lessonid';
const CARD_DAYS = 'days';
const CARD_PERIOD = 'period';
const CARD_TERMS = 'terms';
const CARD_WEEKS = 'weeks';

// Class XML node definition
const CLASS_TABLE_NAME = 'class';
const CLASS_ID = 'id';
const CLASS_NAME = 'name';
const CLASS_SHORT = 'short';

// Classroom XML node definition
const CLASSROOM_TABLE_NAME = 'classroom';
const CLASSROOM_ID = 'id';
const CLASSROOM_NAME = 'name';
const CLASSROOM_SHORT = 'short';
const CLASSROOM_CAPACITY = 'capacity';

// Period XML node definition
const DAYDEF_TABLE_NAME = 'daysdef';
const DAYDEF_ID = 'id';
const DAYDEF_NAME = 'name';
const DAYDEF_SHORT = 'short';
const DAYDEF_DAYS = 'days';

// Period XML node definition
const PERIOD_TABLE_NAME = 'period';
const PERIOD_PERIOD = 'period';
const PERIOD_NAME = 'name';
const PERIOD_SHORT = 'short';
const PERIOD_START_TIME = 'startTime';
const PERIOD_END_TIME = 'endTime';

// Subject XML node definition
const SUBJECT_TABLE_NAME = 'subject';
const SUBJECT_ID = 'id';
const SUBJECT_NAME = 'name';
const SUBJECT_SHORT = 'short';

// Teacher XML node definition
const TEACHER_TABLE_NAME = 'teacher';
const TEACHER_ID = 'id';
const TEACHER_NAME = 'name';
const TEACHER_SHORT = 'short';
const TEACHER_GENDER = 'gender';
const TEACHER_FIRST_NAME = 'firstname';
const TEACHER_LAST_NAME = 'lastname';

// Student XML node definition
const STUDENT_TABLE_NAME = 'student';
const STUDENT_ID = 'id';
const STUDENT_NAME = 'name';
const STUDENT_CLASS_ID = 'classid';
const STUDENT_EMAIL = 'email';
const STUDENT_MOBILE = 'mobile';

// Student Subject XML node definition
const STUDENTSUBJECT_TABLE_NAME = 'studentsubject';
const STUDENTSUBJECT_STUDENT_ID = 'studentid';
const STUDENTSUBJECT_SUBJECT_ID = 'subjectid';
const STUDENTSUBJECT_SEMINAR_GROUP = 'seminargroup';

// Lesson XML node definition
const LESSON_TABLE_NAME = 'lesson';
const LESSON_ID = 'id';
const LESSON_CLASS_IDS = 'classids';
const LESSON_DAY_DEF = 'daydef';
const LESSON_CLASSROOM_IDS = 'classroomids';
const LESSON_PERIODS_PER_CARD = 'periodspercard';
const LESSON_PERIODS_PER_WEEK = 'periodsperweek';
const LESSON_SEMINAR_GROUP = 'seminargroup';
const LESSON_SUBJECT_ID = 'subjectid';
const LESSON_TEACHER_IDS = 'teacherids';

module.exports = {
    TREE_DEF_ATTRIBUTES: TREE_DEF_ATTRIBUTES,
    TREE_DEF_MAIN_NODE: TREE_DEF_MAIN_NODE,
    TREE_DEF_TEACHERS_NODE: TREE_DEF_TEACHERS_NODE,
    TREE_DEF_LESSONS_NODE: TREE_DEF_LESSONS_NODE,
    TREE_DEF_STUDENT_NODE: TREE_DEF_STUDENT_NODE,
    TREE_DEF_CARDS_NODE: TREE_DEF_CARDS_NODE,
    TREE_DEF_CLASSES_NODE: TREE_DEF_CLASSES_NODE,
    TREE_DEF_CLASSROOMS_NODE: TREE_DEF_CLASSROOMS_NODE,
    TREE_DEF_SUBJECTS_NODE: TREE_DEF_SUBJECTS_NODE,
    TREE_DEF_PERIODS_NODE: TREE_DEF_PERIODS_NODE,
    TREE_DEF_DAYSDEFS_NODE: TREE_DEF_DAYSDEFS_NODE,
    TREE_DEF_STUDENTSUBJECTS_NODE: TREE_DEF_STUDENTSUBJECTS_NODE,
    CARD_TABLE_NAME: CARD_TABLE_NAME,
    CARD_CLASSROOM_IDS: CARD_CLASSROOM_IDS,
    CARD_LESSON_ID: CARD_LESSON_ID,
    CARD_DAYS: CARD_DAYS,
    CARD_PERIOD: CARD_PERIOD,
    CARD_TERMS: CARD_TERMS,
    CARD_WEEKS: CARD_WEEKS,
    CLASS_TABLE_NAME: CLASS_TABLE_NAME,
    CLASS_ID: CLASS_ID,
    CLASS_NAME: CLASS_NAME,
    CLASS_SHORT: CLASS_SHORT,
    CLASSROOM_TABLE_NAME: CLASSROOM_TABLE_NAME,
    CLASSROOM_ID: CLASSROOM_ID,
    CLASSROOM_NAME: CLASSROOM_NAME,
    CLASSROOM_SHORT: CLASSROOM_SHORT,
    CLASSROOM_CAPACITY: CLASSROOM_CAPACITY,
    DAYDEF_TABLE_NAME: DAYDEF_TABLE_NAME,
    DAYDEF_ID: DAYDEF_ID,
    DAYDEF_NAME: DAYDEF_NAME,
    DAYDEF_SHORT: DAYDEF_SHORT,
    DAYDEF_DAYS: DAYDEF_DAYS,
    PERIOD_TABLE_NAME: PERIOD_TABLE_NAME,
    PERIOD_PERIOD: PERIOD_PERIOD,
    PERIOD_NAME: PERIOD_NAME,
    PERIOD_SHORT: PERIOD_SHORT,
    PERIOD_START_TIME: PERIOD_START_TIME,
    PERIOD_END_TIME: PERIOD_END_TIME,
    SUBJECT_TABLE_NAME: SUBJECT_TABLE_NAME,
    SUBJECT_ID: SUBJECT_ID,
    SUBJECT_NAME: SUBJECT_NAME,
    SUBJECT_SHORT: SUBJECT_SHORT,
    TEACHER_TABLE_NAME: TEACHER_TABLE_NAME,
    TEACHER_ID: TEACHER_ID,
    TEACHER_NAME: TEACHER_NAME,
    TEACHER_SHORT: TEACHER_SHORT,
    TEACHER_GENDER: TEACHER_GENDER,
    TEACHER_FIRST_NAME: TEACHER_FIRST_NAME,
    TEACHER_LAST_NAME: TEACHER_LAST_NAME,
    STUDENT_TABLE_NAME: STUDENT_TABLE_NAME,
    STUDENT_ID: STUDENT_ID,
    STUDENT_NAME: STUDENT_NAME,
    STUDENT_CLASS_ID: STUDENT_CLASS_ID,
    STUDENT_EMAIL: STUDENT_EMAIL,
    STUDENT_MOBILE: STUDENT_MOBILE,
    STUDENTSUBJECT_TABLE_NAME: STUDENTSUBJECT_TABLE_NAME,
    STUDENTSUBJECT_STUDENT_ID: STUDENTSUBJECT_STUDENT_ID,
    STUDENTSUBJECT_SUBJECT_ID: STUDENTSUBJECT_SUBJECT_ID,
    STUDENTSUBJECT_SEMINAR_GROUP: STUDENTSUBJECT_SEMINAR_GROUP,
    LESSON_TABLE_NAME: LESSON_TABLE_NAME,
    LESSON_ID: LESSON_ID,
    LESSON_CLASS_IDS: LESSON_CLASS_IDS,
    LESSON_DAY_DEF: LESSON_DAY_DEF,
    LESSON_CLASSROOM_IDS: LESSON_CLASSROOM_IDS,
    LESSON_PERIODS_PER_CARD: LESSON_PERIODS_PER_CARD,
    LESSON_PERIODS_PER_WEEK: LESSON_PERIODS_PER_WEEK,
    LESSON_SEMINAR_GROUP: LESSON_SEMINAR_GROUP,
    LESSON_SUBJECT_ID: LESSON_SUBJECT_ID,
    LESSON_TEACHER_IDS: LESSON_TEACHER_IDS
};
