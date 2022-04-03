import create, { GetState, SetState, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "./immer";
import createCommonSlice, { CommonSlice } from "./slices/createCommonSlice";

/**
 * Global Store will extend all the properties of slices in IStore.
 */
interface IStore extends CommonSlice {}

export const useStore = create<IStore>(
  devtools(
    immer((set, get, api) => ({
      ...createCommonSlice(
        set as unknown as SetState<CommonSlice>,
        get as GetState<CommonSlice>,
        api as unknown as StoreApi<CommonSlice>
      ),
    }))
  )
);
