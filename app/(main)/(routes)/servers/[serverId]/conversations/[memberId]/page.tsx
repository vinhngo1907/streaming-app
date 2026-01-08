import { ChatHeader } from "@/components/chat/chat-header";
import { getOrCreateConversation } from "@/lib/conversation";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import React from "react";

interface MemberIdPageProps {
    params: {
        memberId: string; serverId: string;
    },
    searchParams: { video?: boolean; }
}

export default async function MemberIdPage({
    params: { memberId, serverId },
    searchParams: { video }
}: MemberIdPageProps) {
    const profile = await currentProfile();
    if (!profile) return redirect("/sign-in");

    const currentMember = await db.member.findFirst({
        where: { serverId: serverId, profileId: profile.id },
    });
    if (!currentMember) return redirect("/");

    const conversation = await getOrCreateConversation(currentMember.id, memberId);
    if (!conversation) return redirect(`/servers/${serverId}`);

    const { memberOne, memberTwo } = conversation;
    const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

    return (
        <div className="bg-white flex flex-col h-full dark:bg-[#313338]">
            <ChatHeader
                imageUrl={otherMember.profile.imageUrl}
                name={otherMember.profile.name}
                serverId={serverId}
                type="conversation"
            />
            Member Id Page
        </div>
    )
}