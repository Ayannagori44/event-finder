import create from "zustand";

export const useStore = create((set) => ({
  location: "",
  setLocation: (val) => set({ location: val }),

  // ____________________________________ //
  category: "select",
  setCategory: (val) => set({ category: val }),

  // ____________________________________ //
  type: "Indoor",
  setType: (val) => set({ type: val }),

  // ____________________________________ //
  ageRange: {
    start: !true,
    end: !true,
  },
  setAgeStart: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, start: Number(val) } })),
  setAgeEnd: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, end: Number(val) } })),

  // ____________________________________ //
  datetime: {
    date: "",
    time: "",
  },
  setDate: (val) =>
    set((state) => ({ datetime: { ...state.datetime, date: val } })),
  setTime: (val) =>
    set((state) => ({ datetime: { ...state.datetime, time: val } })),

  // ____________________________________ //
  // Form step2 states
  title: "",
  setTitle: (val) => set({ title: val }),

  breif: "",
  setBreif: (val) => set({ breif: val }),

  description: "",
  setDescription: (val) => set({ description: val }),
  // ____________________________________ //
  // Form step3 states

  // fee: "",
  // setFee: (val) => set({ fee: val }),
}));
