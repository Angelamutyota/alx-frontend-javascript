interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
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

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

