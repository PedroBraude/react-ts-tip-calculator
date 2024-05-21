import { Dispatch, SetStateAction } from 'react';
const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
];

type TipPercentageFormPropsT = {
  setTip: Dispatch<SetStateAction<number>>;
};

export const TipPercentageForm = ({ setTip }: TipPercentageFormPropsT) => {
  return (
    <div>
      <h3 className="text-2xl font-black">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOption) => {
          return (
            <div key={tipOption.id}>
              {' '}
              <label htmlFor="">{tipOption.label}</label>{' '}
              <input
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={(e) => setTip(+e.target.value)}
              />{' '}
            </div>
          );
        })}
      </form>
    </div>
  );
};
