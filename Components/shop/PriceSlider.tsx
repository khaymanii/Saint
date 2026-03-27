type Props = {
  min: number;
  max: number;
  setMax: (value: number) => void;
};

export default function PriceSlider({ min, max, setMax }: Props) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">
        Price: ${min} - ${max}
      </p>

      <input
        type="range"
        min="0"
        max="300"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
