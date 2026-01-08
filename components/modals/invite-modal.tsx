"use client";
import React, { useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import * as z from "zod";
import { useOrigin } from "@/hooks/use-origin";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCcw, RefreshCw } from "lucide-react";
import axios from "axios";


export function InviteModal() {
    const { isOpen, type, data, onClose, onOpen } = useModal();
    const origin = useOrigin();
    const { server } = data;
    const inviteUrl = `${origin}/invite/${server?.inviteCode}`;
    const [copied, setCopied] = useState(false);
    const onCopy = () => {
        navigator.clipboard.writeText(inviteUrl)
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }
    const isModalOpen = isOpen && type === "invite";
    const [isLoading, setIsLoading] = useState(false);
    const onNew = async () => {
        try {
            setIsLoading(true);
            const res = await await axios.patch(
                `/api/servers/${server?.id}/invite-code`
            );
            onOpen("invite", { server: res.data })
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Dialog onOpenChange={onClose} open={isModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle
                        className="text-2xl text-center font-bold">
                        Invite Friends
                    </DialogTitle>
                </DialogHeader>
                <div className="p-6">
                    <Label
                        className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                        Server invite link
                    </Label>
                    <div className="flex items-center mt-2 gap-x-2">
                        <Input
                            readOnly
                            disabled={isLoading}
                            value={inviteUrl}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        />
                        <Button onClick={onCopy}
                            size="icon" disabled={isLoading}
                        >
                            {copied ? (
                                <Check className="w-4 h-4" />
                            ) : (<Copy className="w-4 h-4" />)}
                        </Button>
                    </div>
                    <Button
                        disabled={isLoading}
                        onClick={onNew}
                        variant="link" size="sm" className="text-xs text-zinc-500 mt-4"
                    >Generate a new link
                        <RefreshCw className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}