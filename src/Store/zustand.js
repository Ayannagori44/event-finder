import create from "zustand";

export const useStore = create((set) => ({
  // Form step1 states
  title: "",
  setTitle: (val) => set({ title: val }),

  breif: "",
  setBreif: (val) => set({ breif: val }),

  description: "",
  setDescription: (val) => set({ description: val }),

  duration: {
    start: "",
    end: "",
  },
  setDurationStart: (val) =>
    set((state) => ({ duration: { ...state.duration, start: val } })),
  setDurationEnd: (val) =>
    set((state) => ({ duration: { ...state.duration, end: val } })),

  ageRange: {
    start: "",
    end: "",
  },
  setAgeStart: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, start: val } })),
  setAgeEnd: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, end: val } })),

  //
  // Form step2 states
  //
  location: "",
  setLocation: (val) => set({ location: val }),

  category: "select",
  setCategory: (val) => set({ category: val }),

  type: "Indoor",
  setType: (val) => set({ type: val }),

  fee: "",
  setFee: (val) => set({ fee: val }),

  pictures: "",
  setPictures: (val) => {
    let values = [];
    for (var i = 0; i < val.length; i++) {
      values = [...values, val[i].name];
    }
    set({ pictures: values });
  },

  date: {
    start: "",
    end: "",
  },
  setDateStart: (val) =>
    set((state) => ({ date: { ...state.date, start: val } })),
  setDateEnd: (val) => set((state) => ({ date: { ...state.date, end: val } })),

  //
  // Form step3 states
  //

  email: "",
  setEmail: (val) => set({ email: val }),

  url: "",
  setUrl: (val) => set({ url: val }),

  phone: 0,
  setPhone: (val) => set({ phone: Number(val) }),

  address: "",
  setAddress: (val) => set({ address: val }),

  organization: "",
  setOrganization: (val) => set({ organization: val }),
}));
