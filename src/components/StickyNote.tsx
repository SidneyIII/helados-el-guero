import type { CSSProperties } from "react";
import Tape from "./Tape";

type StickyNoteProps = {
  label: string;
  className?: string;
  rotate?: number;
};

// A little hand-written-feeling note "stuck" to a corner with a piece of
// tape — used to flag fan-favorite menu items without needing new copy
// blocks or icons.
export default function StickyNote({ label, className = "", rotate = -7 }: StickyNoteProps) {
  return (
    <div
      aria-hidden="true"
      className={`pinned pointer-events-none absolute z-10 ${className}`}
      style={{ "--rot": `${rotate}deg` } as CSSProperties}
    >
      <div className="relative rounded-sm bg-skin px-3 py-2 shadow-md ring-1 ring-espresso/15">
        <Tape
          rotate={rotate < 0 ? 10 : -10}
          className="-top-2.5 left-1/2 h-4 w-10 -translate-x-1/2"
        />
        <p className="whitespace-nowrap font-body text-xs font-bold text-espresso">{label}</p>
      </div>
    </div>
  );
}
