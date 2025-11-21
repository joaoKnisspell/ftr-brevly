import { Button } from "../ui/button";
import ThrashIcon from "@/assets/Trash.svg"
import CopyIcon from "@/assets/Copy.svg"
import type { linkType } from "@/types/link.type";

interface LinkItemProps extends linkType {
    disabled?: boolean
    onDeleteLink: (id: string) => void
}

export default function LinkItem({ id, url, slug, accesses, disabled, onDeleteLink }: LinkItemProps){
    return(
        <div className="w-full flex icems-center justify-between pb-3 border-b border-gray-200 lg:pb-4">
            <div className="w-1/2 flex flex-col gap-1 items-start overflow-hidden white-space: nowrap lg:flex-1">
                <span className="text-sm text-blue-base truncate font-semibold sm:max-w-[157px] max-w-full">brev.ly/{slug}</span>
                <span className="text-xs text-gray-500 truncate sm:max-w-[157px] max-w-full">{url}</span>
            </div>
            <div className="w-1/2 flex items-center justify-end gap-4 lg:gap-5 lg:w-auto">
                <span className="text-gray-500 text-xs">{accesses} acessos</span>
                <div className="flex items-center gap-1">
                    <Button variant={"secondary"} size={"sm"}><img className="size-4" src={CopyIcon} /></Button>
                    <Button disabled={disabled} variant={"secondary"} size={"sm"}><img className="size-4" src={ThrashIcon} onClick={() => onDeleteLink(id)} /></Button>
                </div>
            </div>
        </div>
    )
}