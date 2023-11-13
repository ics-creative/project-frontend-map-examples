// npm install date-fnsでインストールしたと仮定
import { format } from "date-fns";
const label = format(new Date(), "今日はyyyy年MM月dd日です。");
console.log(label); // 実行結果： "今日は2023年07月11日です。"
