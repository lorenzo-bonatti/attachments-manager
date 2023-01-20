import React, {ReactElement} from "react";
import {Attachment, AttachmentManagerLayout, AttachmentManagerType} from "./models";

interface AttachmentState extends Attachment {
    /** The file binary for new attachments */
    file?: File;
    /** Flag for attachment to delete */
    toDelete?: boolean;
}

interface onSaveProps {
    /** Attachments without changes */
    attachments: Attachment[];
    /** Attachments to add */
    added: AttachmentState[];
    /** Attachments to delete */
    deleted: AttachmentState[];
}

interface AttachmentsManagerProps {
    source: Attachment[];
    showPreview?: boolean;
    showFileName?: boolean;
    layout?: AttachmentManagerLayout;
    type?: AttachmentManagerType;
    onSave: (data: onSaveProps) => Promise<void>;
}

export const AttachmentsManager = (
    {
        source,
        showPreview = true,
        showFileName,
        layout = AttachmentManagerLayout.List,
        type = AttachmentManagerType.Confirm,
        onSave
    }: AttachmentsManagerProps): ReactElement => {

    // State
    const [attachments, setAttachments] = React.useState<AttachmentState[]>(source);

    return (
        <></>
    )
}