/* _jh: This is no way related to Apple iMessage,
 * this is a JS interface for a message object. */
export interface IMessage {
    sender: string,
    receiver: string,
    body: string,
    timestamp: Date
};