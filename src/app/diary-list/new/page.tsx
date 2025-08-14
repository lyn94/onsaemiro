"use client";

import Modal from "@/app/components/Modal/Modal";
import { useState } from "react";

export default function NewDiary() {
  // 일기 내용 상태값
  const [content, setContent] = useState("");
  const onClickToConfirm = () => {
    window.alert(content);
  };
  const handleChangeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div>
      <textarea
        name="content"
        className="w-full border-2 border-gray-300 rounded-md p-2"
        value={content}
        onChange={handleChangeHeight}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={onClickToConfirm}
      >
        내용 확인하기
      </button>
      <Modal />
    </div>
  );
}
