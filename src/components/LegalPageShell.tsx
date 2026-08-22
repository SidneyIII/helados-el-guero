import type { ReactNode } from "react";
import Tilde from "@/components/Tilde";

export default function LegalPageShell({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-4 font-display text-4xl text-espresso md:text-5xl">
            <Tilde className="h-6 w-12 shrink-0" />
            {title}
            <Tilde flip className="h-6 w-12 shrink-0" />
          </h1>
          <p className="mt-4 font-body text-sm text-espresso/60">Last Updated: {lastUpdated}</p>
        </div>

        <div className="legal-copy mt-12 font-body text-espresso/90">{children}</div>
      </div>
    </div>
  );
}
