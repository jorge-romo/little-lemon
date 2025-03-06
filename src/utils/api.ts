const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchTimeSlotsAPI = (date: Date): Promise<string[]> => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 6; i <= 20; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }

  return Promise.resolve(result);
};

export const fetchOccasionsAPI = (): Promise<string[]> => {
  return Promise.resolve(['birthday', 'engagement', 'anniversary']);
};

export type ReserveTableRequest = {
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  specialRequest?: string;
};

export const submitAPI = (formData: ReserveTableRequest): Promise<boolean> => {
  console.log(formData);
  return Promise.resolve(true);
};
