"use client";

import React, { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { InviteModal } from "../modals/invite-modal";
import {EditServerModal} from "../modals/edit-server-modal"

export function ModalProvider(){
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if(!isMounted) return null;
    return (
        <>
            <CreateServerModal />
            <EditServerModal />
            <CreateChannelModal />
            <InviteModal />
        </>
    )
}