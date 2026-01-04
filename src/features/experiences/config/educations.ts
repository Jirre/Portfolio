import { createEducation, Education } from "../types";

export const educations: Education[] = [
  createEducation({
    name: 'Pedagogical Didactic Certificate - Post-Bachelor',
    source: 'University of Applied Sciences Utrecht',
    date: new Date('2027-07-01'),
    timespan: 'November 2025 - July 2027',
    location: 'Utrecht, The Netherlands',
  }),
  createEducation({
    name: "Game Development - MBO",
    source: 'Grafisch Lyceum Utrecht',
    date: new Date('2017-06-01'),
    timespan: 'September 2013 - July 2017',
    location: 'Utrecht, The Netherlands',
  }),
  createEducation({
    name: "HAVO - Nature and Techinque",
    source: 'Leo Kanner College',
    date: new Date('2013-06-01'),
    timespan: 'September 2008 - July 2013',
    location: 'Leiden, The Netherlands',
  })
];