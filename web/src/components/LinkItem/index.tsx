import { Button } from "../ui/button";
import ThrashIcon from "@/assets/Trash.svg"
import CopyIcon from "@/assets/Copy.svg"
import type { linkType } from "@/types/link.type";
import { Link } from "react-router";
import { AlertDialog } from "../AlertDialog";
import { useState } from "react";

interface LinkItemProps extends linkType {
    disabled?: boolean
    onDeleteLink: (id: string) => void
    onCopyLink: (url: string, slug: string) => void
}

export default function LinkItem({ id, url, slug, accesses, disabled, onDeleteLink, onCopyLink }: LinkItemProps){

    const [isOpen, setIsOpen] = useState(false)

    function handleToggleAlertDialog(){
        setIsOpen(!isOpen)
    }

    function handleOnDeleteLink(){
        onDeleteLink(id)
        setIsOpen(false)
    }

    const baseLocation = window.location.origin
    const copiedLink = `${baseLocation}/${slug}`


    return(
        <div className="w-full flex icems-center justify-between pb-3 border-b border-gray-200 lg:pb-4">
            <Link to={copiedLink} className="w-1/2 flex flex-col gap-1 items-start overflow-hidden white-space: nowrap lg:flex-1">
                <span className="text-sm text-blue-base truncate font-semibold sm:max-w-[157px] max-w-full">brev.ly/{slug}</span>
                <span className="text-xs text-gray-500 truncate sm:max-w-[157px] max-w-full">{url}</span>
            </Link>
            <div className="w-1/2 flex items-center justify-end gap-4 lg:gap-5 lg:w-auto">
                <span className="text-gray-500 text-xs">{accesses} acessos</span>
                <div className="flex items-center gap-1">
                    <Button onClick={() => onCopyLink(copiedLink, slug)} variant={"secondary"} size={"sm"}><img className="size-4" src={CopyIcon}  /></Button>
                    <Button onClick={handleToggleAlertDialog} disabled={disabled} variant={"secondary"} size={"sm"}><img className="size-4" src={ThrashIcon} 
                        
                    /></Button>
                </div>
            </div>
            <AlertDialog isAlertDialogOpen={isOpen} onAlertDialogOpenChange={handleToggleAlertDialog} handleOnDeleteLink={handleOnDeleteLink} />                 
        </div>
    )
}