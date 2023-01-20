/**
 * The Attachment model.
 */
export type Attachment = {
    /** The attachment's unique identifier. */
    uuid: string;
    /** File name */
    name?: string;
    /** The attachment's url */
    url: string;
}

/**
 * The Attachment Manager Layout.
 * Define the layout of the attachment manager.
 */
export enum AttachmentManagerLayout {
    Card = 'card',
    List = 'list'
}

/**
 * The Attachment Manager Type.
 * Define the type of the attachment manager.
 * Confirm: The component will return the updates when the save button is clicked.
 * Realtime: The component will return the updated attachment list when an attachment is added or removed.
 */
export enum AttachmentManagerType {
    Confirm = 'confirm',
    Realtime = 'realtime'
}