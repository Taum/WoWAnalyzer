import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/mage';

export const MS_BUFFER_100 = 100;
export const MS_BUFFER_250 = 250;
export const MS_BUFFER_500 = 500;
export const MS_BUFFER_1000 = 1000;

//Frost
export const COMET_STORM_AOE_MIN_TARGETS = 2;
export const SHATTER_DEBUFFS = [
  SPELLS.WINTERS_CHILL,
  SPELLS.FROST_NOVA,
  TALENTS.ICE_NOVA_TALENT,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.RING_OF_FROST_DAMAGE,
  SPELLS.FREEZE,
];

//Fire
export const FIRESTARTER_THRESHOLD = 0.9;
export const SEARING_TOUCH_THRESHOLD = 0.3;
export const COMBUSTION_END_BUFFER = 3000;
export const PHOENIX_FLAMES_MAX_CHARGES = 3;
export const COMBUSTION_DURATION = 12000;
export const SKB_COMBUST_DURATION = 6000;
export const FIRE_DIRECT_DAMAGE_SPELLS = [
  SPELLS.FIREBALL,
  SPELLS.PYROBLAST,
  SPELLS.FIRE_BLAST,
  SPELLS.SCORCH,
  TALENTS.PHOENIX_FLAMES_TALENT,
];

//Arcane
export const ARCANE_CHARGE_MAX_STACKS = 4;
export const AP_MANA_THRESHOLD_PERCENT = 0.4;
export const ARCANE_HARMONY_MAX_STACKS = 18;
export const CASTS_PER_RADIANT_SPARK = 5;
export const ARCANE_BLAST_BASE_MANA_COST = 1375;
export const ARCANE_EXPLOSION_BASE_MANA_COST = 5000;
export const OVERPOWERED_COST_REDUCTION_PERCENT = 0.5;
export const ARCANE_POWER_ALLOWED_CASTS = [
  SPELLS.ARCANE_BLAST,
  SPELLS.ARCANE_EXPLOSION,
  TALENTS.ARCANE_BARRAGE_TALENT,
  TALENTS.ARCANE_MISSILES_TALENT,
  TALENTS.ARCANE_ORB_TALENT,
];

//Mage Generic
export const SHIFTING_POWER_MS_REDUCTION_PER_TICK = 2500;
export const SHIFTING_POWER_REDUCTION_SPELLS = [
  SPELLS.FROST_NOVA,
  SPELLS.BLINK,
  TALENTS.SHIMMER_TALENT,
  TALENTS.ICE_BLOCK_TALENT,
  TALENTS.INVISIBILITY_TALENT,
  SPELLS.COUNTERSPELL,
  SPELLS.MIRROR_IMAGE,
  SPELLS.REMOVE_CURSE,
  SPELLS.TIME_WARP,
  SPELLS.ALTER_TIME,
  TALENTS.RUNE_OF_POWER_TALENT,
  TALENTS.RAY_OF_FROST_TALENT,
  TALENTS.BLAZING_BARRIER_TALENT,
  TALENTS.PHOENIX_FLAMES_TALENT,
  TALENTS.COMBUSTION_TALENT,
  SPELLS.DRAGONS_BREATH,
  SPELLS.FIRE_BLAST,
  TALENTS.BLAST_WAVE_TALENT,
  TALENTS.LIVING_BOMB_TALENT,
  TALENTS.METEOR_TALENT,
  TALENTS.ICE_BARRIER_TALENT,
  TALENTS.BLIZZARD_TALENT,
  TALENTS.COLD_SNAP_TALENT,
  TALENTS.ICY_VEINS_TALENT,
  SPELLS.CONE_OF_COLD,
  TALENTS.SUMMON_WATER_ELEMENTAL_TALENT,
  TALENTS.FROZEN_ORB_TALENT,
  TALENTS.ICE_NOVA_TALENT,
  TALENTS.ICE_FLOES_TALENT,
  TALENTS.EBONBOLT_TALENT,
  TALENTS.RING_OF_FROST_TALENT,
  TALENTS.COMET_STORM_TALENT,
  TALENTS.EVOCATION_TALENT,
  SPELLS.GREATER_INVISIBILITY,
  TALENTS.PRESENCE_OF_MIND_TALENT,
  SPELLS.PRISMATIC_BARRIER,
  TALENTS.ARCANE_SURGE_TALENT,
  TALENTS.TOUCH_OF_THE_MAGI_TALENT,
  TALENTS.ARCANE_FAMILIAR_TALENT,
  TALENTS.ARCANE_ORB_TALENT,
  TALENTS.SUPERNOVA_TALENT,
];

//Conduits
export const WINTERS_PROTECTION_REDUCTION_SEC = [
  0,
  25,
  28,
  30,
  33,
  35,
  38,
  40,
  43,
  45,
  48,
  50,
  53,
  55,
  58,
  60,
];
export const FLOW_OF_TIME_REDUCTION_SEC = [
  0,
  2,
  2.2,
  2.4,
  2.6,
  2.8,
  3,
  3.2,
  3.4,
  3.6,
  3.8,
  4,
  4.2,
  4.4,
  4.6,
  4.8,
];