import Lenis from '@studio-freight/lenis'
import { create } from 'zustand'

interface IStore {
  headerData: undefined | any,
  setHeaderData: (headerData: any) => void,
  footerData: undefined | any,
  setFooterData: (footerData: any) => void,
  navIsOpen: boolean,
  setNavIsOpen: (toggle: boolean) => void,
  lenis: Lenis | undefined,
  setLenis: (lenis: Lenis | undefined) => void,
  overflow: boolean,
  setOverflow: (overflow: boolean) => void,
  triggerTransition: string,
  setTriggerTransition: (triggerTransition: any) => void,
  introOut: boolean,
  setIntroOut: (introOut: boolean) => void,
}

export const useStore = create<IStore>((set) => ({
  headerData: undefined,
  setHeaderData: (headerData: any) => set({ headerData }),
  footerData: undefined,
  setFooterData: (footerData: any) => set({ footerData }),
  navIsOpen: false,
  setNavIsOpen: (toggle: boolean) => set({ navIsOpen: toggle }),
  lenis: undefined,
  setLenis: (lenis: Lenis | undefined) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow: boolean) => set({ overflow }),
  triggerTransition: '',
  setTriggerTransition: (triggerTransition: any) => set({ triggerTransition }),
  introOut: false,
  setIntroOut: (introOut: boolean) => set({ introOut }),
}))
