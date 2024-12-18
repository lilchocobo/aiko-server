
const API_URL = 'https://daze-production.up.railway.app/d2612687-6180-001c-9c0c-d188db86bb35/message';

// Hardcoded values instead of React context
const ROOM_ID = 'lofi-public-chat-room';
const USER_ID = 'default-user';
const USER_NAME = 'default-username';

export interface Message {
    role: 'user' | 'assistant';
    content: string;
    action?: string;
  }
  
  export interface ApiResponse {
    user: string;
    text: string;
    action: string;
    inReplyTo?: string;
  }
  
  export interface ApiRequest {
    text: string;
    roomId?: string;
    userId?: string;
    userName?: string;
    name?: string;
  }

export async function sendMessage({
    text,
    userId,
    userName,
}: ApiRequest): Promise<Message[]> {
  try {
    const request: ApiRequest = {
      text,
      roomId: ROOM_ID,
      userId: userId,
      userName: userName
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: ApiResponse[] = await response.json();

    // Convert API responses to Message format
    return data.flatMap(response => {
      const messages: Message[] = [];

      messages.push({
        role: 'assistant',
        content: response.text
      });


      // If the action is not NONE, we add it to the messages
      if (response.action && response.action !== 'NONE') {
        messages.push({
          role: 'assistant',
          content: `[CALLED ACTION: "${response.action}"]`,
          action: response.action
        });
      }


      return messages;
    });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}