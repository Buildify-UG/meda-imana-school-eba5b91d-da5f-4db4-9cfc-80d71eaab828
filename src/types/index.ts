export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'teacher' | 'student' | 'parent' | 'staff';
  created_at: string;
}

export interface Student {
  id: string;
  user_id: string;
  admission_number: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'Male' | 'Female';
  current_class: string;
  parent_id?: string;
  status: 'Active' | 'On Leave' | 'Suspended' | 'Graduated';
  created_at: string;
}

export interface Teacher {
  id: string;
  user_id: string;
  employee_number: string;
  first_name: string;
  last_name: string;
  qualification?: string;
  specialization?: string;
  status: 'Active' | 'On Leave' | 'Retired';
  created_at: string;
}

export interface Staff {
  id: string;
  user_id: string;
  employee_number: string;
  first_name: string;
  last_name: string;
  position: string;
  department?: string;
  status: 'Active' | 'On Leave' | 'Retired';
  created_at: string;
}

export interface Course {
  id: string;
  course_code: string;
  course_name: string;
  description?: string;
  teacher_id?: string;
  class_level: string;
  credits?: number;
  created_at: string;
}

export interface Mark {
  id: string;
  student_id: string;
  course_id: string;
  exam_type: 'CAT' | 'Midterm' | 'Final' | 'Project';
  score: number;
  grade?: string;
  term: string;
  year: number;
  created_at: string;
}

export interface Fee {
  id: string;
  student_id: string;
  term: string;
  year: number;
  amount: number;
  paid_amount: number;
  status: 'Pending' | 'Partial' | 'Paid' | 'Overdue';
  due_date?: string;
  created_at: string;
}

export interface FeePayment {
  id: string;
  fee_id: string;
  amount: number;
  payment_date: string;
  payment_method: 'Cash' | 'Check' | 'Bank Transfer' | 'Mobile Money';
  receipt_number?: string;
  created_at: string;
}

export interface Parent {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  relationship: 'Father' | 'Mother' | 'Guardian';
  occupation?: string;
  created_at: string;
}
