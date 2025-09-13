import { Children } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";
export function Step({ children }) {
    const length = Children.count(children);
    return (<div className="flex flex-col">
      {Children.map(children, (child, index) => (<div className={cn("relative border-l pl-9", clsx({ "pb-5": index < length - 1 }))}>
          <div className="bg-secondary absolute -left-4 flex size-8 items-center justify-center rounded-full border text-xs font-medium">
            {index + 1}
          </div>
          {child}
        </div>))}
    </div>);
}
export function StepItem({ children, title }) {
    return (<div className="!pt-0.5">
      {title && <h3 className="!mt-0">{title}</h3>}
      <div>{children}</div>
    </div>);
}
