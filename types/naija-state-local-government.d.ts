declare module "naija-state-local-government" {
  const NaijaStates: {
    states: () => string[];
    lgas: (state: string) => string[];
  };

  export default NaijaStates;
}
