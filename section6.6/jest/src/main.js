/**
 * 指定日から指定日数後の日付を計算して返します。
 * （正しい実装です）
 * @param date {Date} 基準となる日付
 * @param days {Number} 基準日から数えて何日後か
 * @return {String} YYYY年MM月DD日の形式の日付
 */
export function getDateAfterDays(date, days) {
  const futureDate = new Date(date);
  futureDate.setDate(date.getDate() + days);

  const year = futureDate.getFullYear(); // 年
  const month = futureDate.getMonth() + 1; // 月
  const day = futureDate.getDate(); // 日
  return `${year}年${month}月${day}日`;
}

/**
 * 指定日から指定日数後の日付を計算して返します。
 * （処理内容に誤りを含みます）
 * @param date {Date} 基準となる日付
 * @param days {Number} 基準日から数えて何日後か
 * @return {String} YYYY年MM月DD日の形式の日付
 */
export function getDateAfterDaysIncorrect(date, days) {
  const year = date.getFullYear(); // 年
  const month = date.getMonth() + 1; // 月
  const day = date.getDate(); // 日

  const nextDay = day + days; // 指定日だけずらす
  return `${year}年${month}月${nextDay}日`;
}
