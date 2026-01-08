import { db } from "@/lib/db";
import { currentProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: Promise<{
    serverId: string;
  }>;
}

export default async function ServerIdPage({ params }: ServerIdPageProps) {
  const profile = await currentProfile();
  if (!profile) return redirect("/");
  const {serverId} = await params;
  const server = await db.server.findUnique({
    where: { id: serverId, members: { some: { profileId: profile.id } } },
    include: { channels: { where: { name: "general" }, orderBy: { createdAt: "asc" } } }
  });

  const initialChannel = server?.channels[0];
  if (initialChannel?.name !== 'genernal') return null;
  
  return redirect(`/servers/${serverId}/channels/${initialChannel?.id}`);
}