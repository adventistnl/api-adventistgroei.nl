import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PubSubService {
  private readonly pubSub = new PubSub();

  publish(triggerName: string, payload: Record<string, unknown>): Promise<void> {
    return this.pubSub.publish(triggerName, payload);
  }

  asyncIterator<T>(triggers: string | string[]) {
    return this.pubSub.asyncIterator<T>(triggers);
  }
}
