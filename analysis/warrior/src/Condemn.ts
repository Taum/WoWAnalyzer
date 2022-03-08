import SPELLS from 'common/SPELLS';
import Analyzer, { Options } from 'parser/core/Analyzer';
import Abilities from 'parser/core/modules/Abilities';

class Condemn extends Analyzer {
  static dependencies = {
    abilities: Abilities,
  };

  condemnSpellId: number = 0;

  constructor(options: Options) {
    super(options);

    this.active = false; // this.selectedCombatant.hasCovenant(COVENANTS.VENTHYR.id);

    if (!this.active) {
      return;
    }

    (options.abilities as Abilities).add({
      spell: SPELLS.CONDEMN.id,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      gcd: {
        base: 1500,
      },
    });
  }
}

export default Condemn;
