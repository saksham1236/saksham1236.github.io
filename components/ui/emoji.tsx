import {
  FluentEmoji,
  type FluentEmojiProps,
} from '@lobehub/fluent-emoji';
import { useControls, useCreateStore } from '@lobehub/ui/storybook';

type props = {
    emoji : string
    className?: string,
}
type EmojiProps = FluentEmojiProps & {
    cdn : {options: Array<string | undefined>, value: string},
    emoji: string,
      size: {
        max: number,
        min: number,
        step: number,
        value: number,
      }
}
export default function Emoji ({ emoji, className }:props) {
  const store = useCreateStore();
  //@ts-ignore
  const control: EmojiProps  = useControls(
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