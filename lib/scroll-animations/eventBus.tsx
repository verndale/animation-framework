interface ListenerCallback {
  (data: any): void;
}

class EventBus {
  private listeners: Record<string, ListenerCallback[]> = {};

  on(event: string, callback: ListenerCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }

  off(event: string, callback: ListenerCallback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }
}

export const eventBus = new EventBus();
