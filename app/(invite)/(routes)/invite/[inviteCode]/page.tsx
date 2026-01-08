import { db } from "@/lib/db";
import { currentProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import React from "react";

interface InviteCodePageProps {
  params: Promise<{ inviteCode: string; }>
}

export default async function InviteCodePage({ params }: InviteCodePageProps) {
  const profile = await currentProfile();
  if (!profile) return redirect("/sign-in");

  const { inviteCode } = await params;
  if (!inviteCode) return redirect("/");

  const existingServer = await db.server.findFirst({
    where: { inviteCode, members: { some: { profileId: profile.id } } }
  });
  if (existingServer) return redirect(`/servers/${existingServer.id}`);

  const server = await db.server.update({
    where: {
      inviteCode
    },
    data: {
      members: {
        create: [{ profileId: profile.id }]
      }
    }
  });
  return null;
}
