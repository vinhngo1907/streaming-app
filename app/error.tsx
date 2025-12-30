"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage () {
    return (
        <div className="h-full flex flex-col space-y-4 items-center justify-content text-muted-foreground">
            <p>Something went wrong.</p>
            <Button variant="secondary">
                <Link href="/">Go home back</Link>
            </Button>
        </div>
    )
}