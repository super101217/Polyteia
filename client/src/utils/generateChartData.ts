export const generateLineData = (numbers: number[], color: string) => {
  return [
    {
      id: 'number',
      color: color,
      data: numbers.map((number, index) => ({
        x: `x${index}`,
        y: number,
      })),
    },
  ];
};

export const generateBarData = (numbers: number[]) => {
  return numbers.map((number, index) => ({
    numberGroup: `x${index}`,
    number: number,
    numberColor: 'hsl(144, 70%, 50%)',
  }));
};
