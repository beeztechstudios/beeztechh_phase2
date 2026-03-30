import React from 'react';
import BookACallFormClient from './BookACallFormClient';


export const metadata = {
  title: "Book a Strategy Call | Beeztech ",
  description:
    "Schedule a free consultation with Beeztech . Discuss your project idea, branding, or digital goals with our team in Udaipur.",
  
  alternates: {
    canonical: "https://www.beeztech.studio/book-call",
  },
};

 

export default function BookACallForm() {
  return <BookACallFormClient />;
}
