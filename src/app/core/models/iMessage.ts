/* The name IMessage refers to this being an interface definition for a message 
 * object. Naming similarities to any other messaging services should not be 
 * used to infer a professional relationship with any fruit related companies, 
 * an endorsement that Han shot first, or an expression of preference between 
 * tabs or spaces. */
export interface IMessage {
    sender: string,
    receiver: string,
    body: string,
    timestamp: Date
};
