import { Moment } from "moment";

const getDay = (day: Moment, today: Moment) => {
  if (day.isSame(today, "day")) return "Today";
  if (day.startOf("day").diff(today.startOf("day"), "day") === 1)
    return "Tomorrow";
  return day.format("ddd DD MMM");
};

export default getDay;
