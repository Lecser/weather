import React, { ChangeEvent, useState, KeyboardEvent } from "react";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState("");

  const activateEditMode = () => {
    setEditMode(true);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
    setTitle("");
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      activateViewMode();
    }
  };

  return editMode ? (
    <input
      className={
        "absolute w-64 rounded-3xl border pr-2.5 pl-2.5 shadow-lg outline-none"
      }
      placeholder={"Введите город"}
      value={title}
      onKeyUp={onKeyUp}
      onChange={changeTitle}
      autoFocus
      onBlur={activateViewMode}
    />
  ) : (
    <span
      className={"hover:cursor-pointer  hover:opacity-75"}
      onClick={activateEditMode}
    >
      {props.value}
    </span>
  );
});
