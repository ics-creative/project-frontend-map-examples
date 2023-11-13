import { getDateAfterDays } from "./main.js";
test("翌日の日付の確認", () => {
  const result = getDateAfterDays(new Date("2023-07-18"), 2);
  expect(result).toBe("2023年7月20日");
});

test("月末からの足し算", () => {
  const result = getDateAfterDays(new Date("2023-07-31"), 1);
  expect(result).toBe("2023年8月1日");
});

test("月初からの引き算", () => {
  const result = getDateAfterDays(new Date("2023-08-01"), -1);
  expect(result).toBe("2023年7月31日");
});
