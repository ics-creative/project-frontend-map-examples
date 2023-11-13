import { format } from "date-fns";
import fs from "fs"; // fsモジュールを読み込む
const label = format(new Date(), "今日はyyyy年MM月dd日です。");
console.log(label); // 実行結果： "今日は2023年07月11日です。"
fs.writeFileSync("output.txt", label, "utf8"); // output. txtにlabel変数の文字列を書き込む
