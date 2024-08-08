import { UserMessageType } from "@/types/user.types";
import {
  jua,
  kotra,
  kyobo,
  pretendard,
  gamja,
  jalnan,
} from "@/public/fonts/fonts";

const fonts = [
  { fontClass: jua.className, fontText: "Jua" },
  { fontClass: pretendard.className, fontText: "Pretendard" },
  { fontClass: gamja.className, fontText: "Gamja" },
  { fontClass: jalnan.className, fontText: "Jalnan" },
  { fontClass: kyobo.className, fontText: "Kyobo" },
  { fontClass: kotra.className, fontText: "Kotra" },
];

interface MessageListProps {
  messages: UserMessageType[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message, index) => {
        const matchingFont = fonts.find(
          (font) => font.fontClass === message.font,
        );
        const fontClass = matchingFont
          ? matchingFont.fontClass
          : fonts[0].fontClass;
        return (
          <div
            key={message.id}
            className="message-box w-full rounded-lg bg-[#334155] p-4 text-lg text-white"
          >
            <span className="text-base mdl:text-lg">
              {index + 1}.{" "}
              <span className={fontClass}>{message.message}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
