export type Tab = 'chat' | 'image' | 'tts';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}

export type ImageSize = '1K' | '2K' | '4K';

export interface GeneratedImage {
  url: string;
  prompt: string;
  size: ImageSize;
  timestamp: number;
}

export interface TTSState {
  text: string;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
}
