import { BaseExperience } from "@/features/experiences/types/_experience";
import { Achievement, Education, Job } from "@/features/experiences";
import { AchievementCard } from "./achievement-card";
import { EducationCard } from "./education-card";
import { JobCard } from "./job-card";

export const ExperienceCard = ({experience, className}: {experience: BaseExperience<any>, className?: string}) => {
  if (experience.type === 'achievement') {
    return <AchievementCard achievement={experience as Achievement} className={className} />;
  }

  if (experience.type === 'education') {
    return <EducationCard education={experience as Education} className={className} />;
  }

  if (experience.type === 'job') {
    return <JobCard job={experience as Job} className={className} />;
  }

  return null;
}