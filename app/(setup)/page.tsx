import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import React from "react";

export default async function SetupPage() {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where: {
            members: { some: { profileId: profile.id } }
        }
    });

    if (server) return redirect(`/servers/${server.id}`);
    return (
        <div className="h-full flex flex-col space-y-4 items-center justify-content text-muted-foreground">
            Setup Page
        </div>
    )
}