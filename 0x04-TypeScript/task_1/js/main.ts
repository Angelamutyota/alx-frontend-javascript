interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}


const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'Nairobi',
  speciality: 'Mathematics', 
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'London',
  contract: true, 
  rating: 4.7,
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const parts = { firstName, lastName };
  return `${firstName}. ${lastName}`;
}

// Example
console.log(printTeacher("John", "Doe")); 