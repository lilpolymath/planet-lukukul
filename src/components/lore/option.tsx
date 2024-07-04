import { FC } from 'react';

import { cx } from '@/utils/misc';
import { Choice } from '@/utils/types';
import check from '@/assets/svg/check.svg';

type LoreOptionProps = {
  choice: Choice;
  isSelected: boolean;
  onSelect: () => void;
  isEnabled: boolean;
};

const LoreOption: FC<LoreOptionProps> = ({
  choice,
  isSelected,
  onSelect,
  isEnabled,
}) => (
  <div className='lore__options__node__container'>
    <label
      htmlFor={choice.next}
      className={cx(
        'lore__options__node',
        isSelected && 'lore__options__node--selected'
      )}
      style={{ pointerEvents: isEnabled ? 'auto' : 'none' }}
    >
      {choice.text}
      <input
        id={choice.next}
        name='choice'
        type='radio'
        checked={isSelected}
        onChange={onSelect}
        value={choice.next}
      />
      <div className='lore__options__node__check'>
        <img src={check.src} alt='check' />
      </div>
    </label>
  </div>
);

export default LoreOption;
