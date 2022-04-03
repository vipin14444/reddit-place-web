import { GetState, SetState, StateCreator, StoreApi } from "zustand";

export interface CommonSlice {
  coords: { x: number; y: number };
  setCoords: (data: { x: number; y: number }) => void;
}

const createCommonSlice: StateCreator<CommonSlice> | StoreApi<CommonSlice> = (
  set,
  get
) => ({
  coords: { x: -1, y: -1 },
  setCoords: (data: { x: number; y: number }) => set({ coords: data }),
});

export default createCommonSlice as (
  set: SetState<CommonSlice>,
  get: GetState<CommonSlice>,
  api: StoreApi<CommonSlice>
) => CommonSlice;
