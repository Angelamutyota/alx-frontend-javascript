interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Examples
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


