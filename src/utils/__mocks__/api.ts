import type { ReserveTableRequest } from '../api';

export const fetchTimeSlotsAPI = jest
  .fn<Promise<string[]>, [Date]>()
  .mockResolvedValue(['15:00', '15:30', '16:00']);

export const fetchOccasionsAPI = jest
  .fn<Promise<string[]>, []>()
  .mockResolvedValue(['birthday', 'engagement', 'anniversary']);

export const submitAPI = jest
  .fn<Promise<boolean>, [ReserveTableRequest]>()
  .mockResolvedValue(true);
