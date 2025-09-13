"use client";
import { Time } from "@vidstack/react";
export function TimeGroup() {
    return (<div className="flex items-center text-sm font-medium">
      <Time className="time" type="current"/>
      <div className="mx-1">/</div>
      <Time className="time" type="duration"/>
    </div>);
}
