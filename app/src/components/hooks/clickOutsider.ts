import { useEffect, useState } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handleClickCloseModal: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // モーダルの外側がクリックされた場合、モーダルを閉じる
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickCloseModal();
      }
    };
    // ウィンドウにクリックイベントリスナーを追加
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // コンポーネントがアンマウントされるときにイベントリスナーを削除
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickCloseModal, ref]);

  return;
};
