"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";

export function UserAvatar({ src, className }: { src?: string; className?: string; }) {
    return (
        <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
            <AvatarImage src={src} />
        </Avatar>
    )
}