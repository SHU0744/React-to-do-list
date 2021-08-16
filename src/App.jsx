import { useState } from "react";
import "./styles.css";

export const App = () => {
  // 動的なブロッックをstate化
  const [incompleteTodos, setincompleteTodos] = useState(["test", "test2"]);
  const [completeTodos, setcompleteTodos] = useState(["テスト"]);
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未入力</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>　削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
