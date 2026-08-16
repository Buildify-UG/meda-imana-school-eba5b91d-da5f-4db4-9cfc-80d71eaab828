CREATE INDEX IF NOT EXISTS idx_students_user_id ON students(user_id);

CREATE INDEX IF NOT EXISTS idx_students_class ON students(current_class);

CREATE INDEX IF NOT EXISTS idx_teachers_user_id ON teachers(user_id);

CREATE INDEX IF NOT EXISTS idx_marks_student ON marks(student_id);

CREATE INDEX IF NOT EXISTS idx_marks_course ON marks(course_id);

CREATE INDEX IF NOT EXISTS idx_fees_student ON fees(student_id);

CREATE INDEX IF NOT EXISTS idx_courses_teacher ON courses(teacher_id);

INSERT INTO courses (course_code, course_name, description, class_level, credits) VALUES
  ('ENG101', 'English Language', 'Communication and literature skills', 'Form 1', 3),
  ('MATH101', 'Mathematics', 'Algebra, geometry and calculus', 'Form 1', 4),
  ('SCI101', 'Science', 'Biology, chemistry and physics', 'Form 1', 4),
  ('HIS101', 'History', 'World and African history', 'Form 1', 3),
  ('GEO101', 'Geography', 'Physical and human geography', 'Form 1', 3),
  ('ENG201', 'English Language', 'Advanced communication', 'Form 2', 3),
  ('MATH201', 'Mathematics', 'Advanced algebra and trigonometry', 'Form 2', 4),
  ('CHEM201', 'Chemistry', 'Organic and inorganic chemistry', 'Form 2', 4)
ON CONFLICT (course_code) DO NOTHING;