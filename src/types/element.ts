export interface Element {
  name: string;
  appearance: string;
  atomic_mass: number;
  boil: number;
  category: string; // could be enum
  color: string | null;
  density: number;
  discovered_by: string;
  melt: number;
  molar_heat: number;
  named_by: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectral_img: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: Array<number>;
}

export interface ElementWithReactionBehavior extends Element {
  canFormMolecularCompound?: boolean;
  canFormIonicCompound: boolean;
}
