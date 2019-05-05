export enum EPetEnum {
  BOUNDER,
  FIKI,
  GANKER,
  LUSTER,
  MYSTIK,
  OWL,
  PINCER,
  PUSHER,
  RAZER,
  TINKER,
  TOPPS,
  TORTUS
}

export const PetEnumText = new Map<EPetEnum, string>()
  .set(EPetEnum.BOUNDER, 'Bounder')
  .set(EPetEnum.FIKI, 'Fiki')
  .set(EPetEnum.GANKER, 'Fitz')
  .set(EPetEnum.LUSTER, 'Luster')
  .set(EPetEnum.MYSTIK, 'Mystik')
  .set(EPetEnum.OWL, 'Owl')
  .set(EPetEnum.PINCER, 'Pincer')
  .set(EPetEnum.PUSHER, 'Plunderer')
  .set(EPetEnum.RAZER, 'Razer')
  .set(EPetEnum.TINKER, 'Tinker')
  .set(EPetEnum.TOPPS, 'Topps')
  .set(EPetEnum.TORTUS, 'Tortus');

export const PetEnumGameName = new Map<EPetEnum, string>()
  .set(EPetEnum.BOUNDER, 'Familiar_Bounder')
  .set(EPetEnum.FIKI, 'Familiar_Fiki')
  .set(EPetEnum.GANKER, 'Familiar_Ganker')
  .set(EPetEnum.LUSTER, 'Familiar_Luster')
  .set(EPetEnum.MYSTIK, 'Familiar_Mystik')
  .set(EPetEnum.OWL, 'Familiar_Owl')
  .set(EPetEnum.PINCER, 'Familiar_Pincer')
  .set(EPetEnum.PUSHER, 'Familiar_Pusher')
  .set(EPetEnum.RAZER, 'Familiar_Razer')
  .set(EPetEnum.TINKER, 'Familiar_Tinker')
  .set(EPetEnum.TOPPS, 'Familiar_Topps')
  .set(EPetEnum.TORTUS, 'Familiar_Tortus');


