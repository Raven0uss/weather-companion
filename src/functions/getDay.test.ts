import moment from "moment";
import getDay from "./getDay";

describe("getDay function test", () => {
  it("should return today", () => {
    const date = new Date();
    const day = moment(date);
    const today = moment(date);

    const result = getDay(day, today);
    const expected = "Today";

    expect(result).toBe(expected);
  });

  it("should return tomorrow", () => {
    const date = new Date();
    const day = moment(date).add(24, "hours");
    const today = moment(date);

    const result = getDay(day, today);
    const expected = "Tomorrow";

    expect(result).toBe(expected);
  });

  it("should return tomorrow", () => {
    const date = new Date();
    const day = moment(date).add(24, "hours");
    const today = moment(date);

    const result = getDay(day, today);
    const expected = "Tomorrow";

    expect(result).toBe(expected);
  });

  it("should return the expected format of date", () => {
    const date = new Date();
    const day = moment(date).add(72, "hours");
    const today = moment(date);

    const result = getDay(day, today);
    expect(moment(result, "ddd DD MMM", true).isValid()).toBeTruthy();
  })
});
