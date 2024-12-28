import { onMount } from 'astro';

export default function YearsCounter(startDate, endDate) {
    let years = 0;
    let months = 0;

    const diffInMs = endDate - startDate;
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44)); // Aproximación de un mes a 30.44 días
    years = Math.floor(diffInMonths / 12);
    months = diffInMonths % 12;

    if (years === 0 && months === 0) {
        return "Brand new position!";
    } else if (years === 0) {
        return `${months} month${months !== 1 ? "s" : ""}`;
    } else if (months === 0) {
        return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
        return `${years} year${years !== 1 ? "s" : ""} and ${months} month${months !== 1 ? "s" : ""}`;
    }
}