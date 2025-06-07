import React from "react";

type Props = {
  className?: string;
};

export function TestPost({ className }: Props) {
  return (
    <div>
      <div>あああ</div>
      <div className="my-20">サンプルテストテスト</div>
      <div>aaa</div>
    </div>
  );
}
