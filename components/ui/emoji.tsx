import {
  FluentEmoji,
  type FluentEmojiProps,
} from '@lobehub/fluent-emoji';
import { useControls, useCreateStore } from '@lobehub/ui/storybook';

type props = {
    emoji : string
    className?: string,
}
export default function Emoji ({ emoji, className }:props) {
  const store = useCreateStore();
  const control: FluentEmojiProps | any = useControls(
    {
      cdn: {
        options: ['aliyun', 'unpkg'],
        value: 'unpkg',
      },
      emoji: emoji,
      size: {
        max: 512,
        min: 16,
        step: 1,
        value: 64,
      },
    },
    { store },
  );

  return (
          <FluentEmoji className={className} type={'anim'} {...control} />
  );
};