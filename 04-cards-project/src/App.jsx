import React from 'react'
import { Bookmark } from 'lucide-react'
import  Card  from "./components/Card";
import User from './components/User';

const App = () => {

const jobOpenings = [
  {
    brandLogo: "google-logo.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "New York, NY"
  },
  {
    brandLogo: "microsoft-logo.png",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Seattle, WA"
  },
  {
    brandLogo: "apple-logo.png",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hour",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "amazon-logo.png",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Austin, TX"
  },
  {
    brandLogo: "meta-logo.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "netflix-logo.png",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hour",
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "nvidia-logo.png",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "adobe-logo.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "San Jose, CA"
  },
  {
    brandLogo: "salesforce-logo.png",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "uber-logo.png",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Chicago, IL"
  }
];

  return (
    <div className='parent'>

    <Card />

    {jobOpenings.map(function(elem){
      return <Card />
    })}
    
    </div>
  )
}

export default App