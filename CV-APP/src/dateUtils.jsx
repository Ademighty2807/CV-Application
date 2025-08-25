export function formatDuration(start, end) {
  if (!start) return "";
  
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(); // "Present"
  
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  months = months % 12;
  
  let duration = "";
  if (years > 0) duration += `${years} year${years > 1 ? "s" : ""} `;
  if (months > 0) duration += `${months} month${months > 1 ? "s" : ""}`;
  if (!duration) duration = "Less than a month";
  
  return duration.trim();
}
  