"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavigationItem({ id, imageUrl, name }: {
    id: string; imageUrl: string; name: string
}) {
    const params = useParams();
    return (
        <ActionTooltip side="right" align="center" label={name}>
            <button className="group relative flex items-center" >
                <div
                    className={
                        cn("absolute left-0 bg-primary rounded-full transition-all w-[4px]",
                            params?.serverId !== id && "group-hover:h-[20px]",
                            params?.serverId === id ? "h-[36px]" : "h-[8px]")}
                />
                <div
                    className={cn(
                        "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
                        params?.serverId === id &&
                        "bg-primary/10 text-primary rounded-[16px]"
                    )}
                >
                    <Image alt="channel" src={imageUrl} fill />
                </div>
            </button>
        </ActionTooltip>
    )
}