"use client";

export const Age = () => {
  const today = new Date();
  const birthDate = new Date(1995, 5, 20);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return <>age</>;
}