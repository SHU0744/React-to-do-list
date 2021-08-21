import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 動的なブロッックをstate化
  const [todoText, setTodotext] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  // inputに値を取得
  const onChangeTodoText = (event) => setTodotext(event.target.value);
  //追加ボタン
  const onClickAdd = () => {
    //から文字だったら処理させない
    if (todoText === "") return;
    // スプレッド構文使用してと新しい値を配列にする
    const newTodos = [...incompleteTodos, todoText];
    //未入力欄DOMを生成
    setincompleteTodos(newTodos);
    //inputの値をからにする
    setTodotext("");
  };

  // 削除ボタン
  const onclickDelete = (index) => {
    // 配列をコピー
    const newTodos = [...incompleteTodos];
    //index番号を1つ削除する
    newTodos.splice(index, 1);

    //未入力欄DOMを新たに生成
    setincompleteTodos(newTodos);
  };

  //完了ボタン
  const onclickComplete = (index) => {
    // 配列をコピー
    const newIncompleteTodos = [...incompleteTodos];
    //index番号を1つ削除する
    newIncompleteTodos.splice(index, 1);
    //未入力欄DOMを新たに生成

    //完了エリアの配列を作成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  //戻すボタン
  const onclickBack = (index) => {
    //削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //未完了に追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setcompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onclickComplete={onclickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos todos={completeTodos} onclickBack={onclickBack} />
    </>
  );
};
