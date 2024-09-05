"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import {Toolbar} from "@/app/workspace/[workspaceId]/toolbar";
import {Sidebar} from "@/app/workspace/[workspaceId]/sidebar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
};

const WorkspaceIdLayout = ({children}: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-full">
            <Toolbar/>
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar/>
                <ResizablePanelGroup
                    direction="horizontal"
                >
                    <ResizablePanel>
                        <div>
                            Channels Sidebar
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel>
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
export default WorkspaceIdLayout;