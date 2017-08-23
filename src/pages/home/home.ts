import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lyrics: string = '';
  image: string = 'assets/images/chiantos.png';
  soundName: string = '';

  public sounds = {
    "barbare_01": "Poulet ! Poulet ! Piou, piou, piou !!",
    "barbare_02": "On s\'emmerde dans cette aventure !",
    "barbare_03": "La magie, c\'est pour les tarlouzes !!",
    "barbare_04": "Ta bouche sent comme les bottes de mon père après la pluie !",
    "barbare_05": "Il est temps de botter quelques culs d\'orques",
    "barbare_06": "J\'aime l\'odeur du napalm, au p\'tit déjeuner !",
    "barbare_07": "Je te collerais bien une baffe, en fait. Mais c\'est déshonorant !",
    "elfe_01": "T\'as déjà essayé de te laver ?",
    "elfe_02": "T\'es copain avec le Nain toi, non ? Tu sens pareil.",
    "elfe_03": "Tu devrais noyer le type qui t\'as vendu cette brosse à cheveux.",
    "elfe_04": "T\'es aussi sale qu\'un Troll ! Bhhwweeuuu !!",
    "elfe_05": "Tu t\'es pris une porte dans la figure, ou bien c\'est ta tête normale ?",
    "elfe_06": "Tu veux une cagoule pour faire des bisous à ta copine ?",
    "elfe_07": "À mon avis, tu peux faire carrière dans le ramassage des poubelles.",
    "elfe_08": "J\'ai déjà vu des gens moches comme toi. Et d\'ailleurs, j\'ai vomi !",
    "elfe_09": "Je pense que t\'aurais même pas le droit de rentrer dans ma forêt.",
    "magote_01": "Ts comme les miroirs, toi ! Tu réfléchis, mais tu penses pas.",
    "magote_02": "Je crois que tu as été affecté par un sort de stupidité.",
    "magote_03": "Tu espérais quoi en ouvrant cette boîte ? Devenir intelligent ?",
    "magote_04": "Si tu veux lire un livre, il faudrait commencer par le tenir à l\'endroit.",
    "magote_05": "Le jour ou tu es allé à l\'école, on t\'as enfermé dans les toilettes, c\'est ça ?",
    "magote_06": "Ta mère aurait dû arrêter la boisson avant ta naissance",
    "magote_07": "Oh, regarde là-bas ! Tes neurones qui s\'envolent !",
    "magote_08": "Si tu veux, j\'ai un parchemin pour éviter d\'avoir la honte !?",
    "magote_09": "Ah, mais c\'est toi qui pue, en fait !",
    "magote_10": "Tu sais qu\'il y\'a des centres d\'accueil pour les loosers ?",
    "magote_11": "J\'ai déjà combattu des gobelins qui avaient l\'air moins nuls que toi !",
    "nain_01": "Hé ! T\'as l\'air aussi débile qu\'un Nazgûl en tongs !",
    "nain_02": "Ha ha ha ! La gueule d\'endive !",
    "nain_03": "C\'est toi l\'endive ! C\'est toi l\'endive !",
    "nain_04": "C\'est normal, que ta bouche sente les pieds ?",
    "nain_05": "Hé ! Ta mère, elle couche avec Sauron !",
    "nain_06": "Un jour, il faudrait que tu penses à t\'acheter un cerveau.",
    "nain_07": "Mais en fait, t\'es aussi bête que t\'es moche !",
    "nain_08": "Hé ben, la nature t\'as pas fait de cadeaux...",
    "nain_09": "J\'ai une idée ! On boit une biére, mais c\'est toi qui paie !",
    "nain_10": "Fais gaffe ! La porte va se transformer en poulet !",
    "nain_11": "Hé ! Mais pourquoi t\'as pas de barbe ?",
    "nain_12": "T\'as trop l\'air d\'un con avec ton casque ! Ah mais non, c\'est tes cheveux !",
    "nain_13": "Toi, t\'es du genre à manger ton ongles de pieds, non ?",
    "nain_14": "Un jour, j\'ai eu un ami. Mais c\'était pas toi...",
    "nain_15": "T\'es né sur un fumble toi, non !?",
    "nain_16": "Tes parents sont consanguins ?",
    "nain_17": "Tu sais quoi ?! Tu vas dans une direction, et moi je vais dans l\'autre.",
    "nain_18": "Tu devrais t\'acheter une hache, t\'aurais moins l\'air d\'un baltringue.",
    "nain_19": "T\'as de la chance dtre grand et d\'avoir des copains !",
    "nain_20": "C\'est vraiment ta tête, ou c\'est ton cou qui a vomi ?",
    "nain_21": "Tu veux marcher sur le piège !? Juste pour voir si ça marche ?",
    "nain_22": "On dirait que tu n\'as jamais entendu parler du charisme, en fait ?!",
    "nain_23": "On t\'as placé sur terre juste pour venir me faire chier, c\'est ça ?",
    "nain_24": "T\'as que ça foutre d\'ouvrir des boîtes ? Pauv\' naze !",
    "nain_25": "Si t\'étais un nain ? Ben, tu serais pas mon pote quand même...",
    "nain_26": "C\'est quoi la différence entre ta tête et ton cul ?",
    "nain_27": "Ohh ! Mais, t\'es juste super con, en fait !",
    "nain_28": "Moi je t\'écoute même pas. T\'as trop une tronche d\'Elfe.",
    "nain_29": "Mais tu vas crever, oui ? Sale troll de merde !!",
    "nain_30": "Ton père, il coiffe des pones en short rose ! Hahah..",
    "nain_31": "J\'ai cassé des cailloux qui étaient plus malins que toi.",
    "nain_32": "Je suis sûr que tu bouffes de la salade, toi !",
    "nain_33": "Je suis pas chiant ! J\'ai seulement du caractère !",
    "ranger_01": "Hé ! Tu sens ça ? Ça sent ton échec à plein naseaux !",
    "ranger_02": "T\'aurais jamais dû quitter tes parents, en fait !",
    "ranger_03": "T\'es du genre paladin de Dlul, toi, non ?",
    "ranger_04": "C\'était une blague naine ça ? Tu devrait arrêter...",
    "ranger_05": "À ta place, j\'essayerais d\'avoir des amis, en fait.",
    "ranger_06": "Si c\'était pour venir nous faire chier, il fallait rester chez toi.",
    "ranger_07": "Qu\'est-ce que t\'as fait avec ton cerveau ? Tu l\'as vendu ?",
    "ranger_08": "T\'as la même tête que Gzor, sauf que toi t\'as l\'air bête.",
    "ranger_09": "Un jour, j\'ai connu un type sympa. Mais c\'étais pas toi...",
    "ranger_10": "T\'as vu comme l\'ambiance est sympa ici ? Tu devrais partir, en fait.",
    "ranger_11": "T\'avais piscine, le jour ou tes parents t\'ont expliqué la politesse ?",
    "ranger_12": "C\'est marrant, mais quand je te parle, j\'ai l\'impression de rater ma vie...",
    "ranger_13": "Toi t\'es le genre qui n\'a pas de sac quand il pleut des pièces d\'or.",
    "ranger_14": "Faudrait être un peu plus motivé, si tu veux rentrer dans mon équipe !"
  };

  constructor(public navCtrl: NavController) {

  }

  public randomSound() {
    var files = Object.keys(this.sounds);
    var randomNum = this.getRandomInt(0, files.length);
    this.soundName = files[randomNum];
    var audio = new Audio('assets/audio/'+this.soundName+'.mp3');
    audio.play();
    this.lyrics = this.sounds[this.soundName];
    var imageName = this.soundName.substring(0, this.soundName.length-3);
    this.image = 'assets/images/'+imageName+'.jpg';
  }

  public replay() {
    if (this.soundName) {
      var audio = new Audio('assets/audio/'+this.soundName+'.mp3');
      audio.play();
    }
  }

  /**
   * The maximum is exclusive and the minimum is inclusive
   * @param min 
   * @param max 
   */
  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}