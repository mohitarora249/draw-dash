import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getNameInitials = (name: string) => {
  // Use regex to find the first letter of each word
  const matches = name.match(/\b\w/g) || [];
  // Concatenate the matched letters and convert them to uppercase
  return matches.join("").toUpperCase();
};
