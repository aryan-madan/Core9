"use client";

import { Dock, DockIcon } from "@/components/gui/dock";
import {
    SiGithub,
    SiGoogledrive,
    SiNotion,
    SiWhatsapp,
} from "react-icons/si";

export function Desktop() {
    return (
        <div className="fixed inset-0 bg-black">
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <Dock direction="bottom">
                    <DockIcon>
                        <SiGithub className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                        <SiGoogledrive className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                        <SiNotion className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                        <SiWhatsapp className="h-6 w-6" />
                    </DockIcon>
                </Dock>
            </div>
        </div>
    );
}