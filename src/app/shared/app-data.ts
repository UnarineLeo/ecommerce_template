export interface University {
  id: number;
  name: string;
  suburb: string;
  province: string;
  logo: string;
  fields: string[];
  image: string;
  students: number;
  rating: number;
  openingDate: string;
  closingDate: string;
  link: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export const STUDY_FIELDS: SelectOption[] = [
  { value: '', label: 'All Fields' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'medicine', label: 'Medicine & Health Sciences' },
  { value: 'business', label: 'Business & Commerce' },
  { value: 'law', label: 'Law' },
  { value: 'arts', label: 'Arts & Humanities' },
  { value: 'science', label: 'Natural Sciences' },
  { value: 'social', label: 'Social Sciences' },
  { value: 'education', label: 'Education' },
  { value: 'it', label: 'Information Technology' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'architecture', label: 'Architecture & Built Environment' }
];

export const PROVINCES: SelectOption[] = [
  { value: '', label: 'All Provinces' },
  { value: 'western-cape', label: 'Western Cape' },
  { value: 'gauteng', label: 'Gauteng' },
  { value: 'kwazulu-natal', label: 'KwaZulu-Natal' },
  { value: 'eastern-cape', label: 'Eastern Cape' },
  { value: 'free-state', label: 'Free State' },
  { value: 'limpopo', label: 'Limpopo' },
  { value: 'mpumalanga', label: 'Mpumalanga' },
  { value: 'north-west', label: 'North West' },
  { value: 'northern-cape', label: 'Northern Cape' }
];
