import { useEffect, useState } from "react";
import "./App.css";
import CalcIcon from "./assets/calculator.svg";

function App() {
  const [usertext, setUsertext] = useState("");

  useEffect(() => {
    document.title = "文字数カウント";
  }, []);

  const usertextRow = (str: string) => {
    if (str === "") {
      return 0;
    }
    return str.split("\n").length;
  };

  const usertextParagraph = (str: string) => {
    return str.split("\n").reduce((paraNum: number, text: string) => {
      if (text !== "") {
        return paraNum + 1;
      }
      return paraNum;
    }, 0);
  };

  const usertextPaper = (str: string) => {
    if (str === "") {
      return 0;
    }
    return Math.ceil(
      // 改行毎に原稿用紙に記載した場合の行数をカウントする
      str.split("\n").reduce((paperRowNum: number, text: string) => {
        // 空行は1行とする
        if (text === "") {
          return paperRowNum + 1;
        }
        // 1行20文字として、行数をカウントする
        return paperRowNum + Math.ceil(text.length / 20);
      }, 0) / 20,
    );
  };

  return (
    <>
      <main>
        <div>
          <div className="title-box">
            <h1 className="title">文字数カウント</h1>
            <img src={CalcIcon} alt="" width={30} height={30} />
          </div>
          <textarea
            name="text"
            id="usertext"
            className="usertext"
            cols={30}
            rows={10}
            value={usertext}
            onChange={(e) => setUsertext(e.target.value)}
            placeholder="ここに入力してね&#13;例) 使ってくれてありがとう。"
          ></textarea>
          <table className="result">
            <tr className="result-item">
              <td className="result-item-title">文字数 (スペースを含む)</td>
              <td className="result-item-value">{usertext.length}</td>
              <td className="result-item-unit">文字</td>
            </tr>
            <tr className="result-item">
              <td className="result-item-title">文字数 (スペースを除く)</td>
              <td className="result-item-value">
                {usertext.replace(/\s/gi, "").length}
              </td>
              <td className="result-item-unit">文字</td>
            </tr>
            <tr className="result-item">
              <td className="result-item-title">行数</td>
              <td className="result-item-value">{usertextRow(usertext)}</td>
              <td className="result-item-unit">行</td>
            </tr>
            <tr className="result-item">
              <td className="result-item-title">段落数</td>
              <td className="result-item-value">
                {usertextParagraph(usertext)}
              </td>
              <td className="result-item-unit">段落</td>
            </tr>
            <tr className="result-item">
              <td className="result-item-title">原稿用紙換算</td>
              <td className="result-item-value">{usertextPaper(usertext)}</td>
              <td className="result-item-unit">枚分</td>
            </tr>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
