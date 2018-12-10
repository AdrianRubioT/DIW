/* js para que contendra los castigos y las tipificaciones con texto para traducirlo de la base de datos que estan en booleano */

/* var y = "holamundo";
function hola() {
    return y;
} */

function castigo1() {
    return "Compareixença davant el cap d'estudis/director";
}

function castigo2(aparell) {
    return "Retirada d'aparells electrònics " + aparell;
}

function castigo3(diaInicio, diaFinal) {
    return "Privació del temps de recreació els dies: " + diaInicio + " fins a " + diaFinal;
}

function castigo4(tarea, dies, horario) {
    return "Realizació de les següents tasques educadores: " + tarea + " els dies " + dies + " i amb l'orari " + horario;
}

function castigo5(dies) {
    return "Suspenció del dret de l'asistència en activitats extraescolars i complementàries des de " + dies;
}


/* Tipificacio Leve */

function tipiLeve() {

    return array = [
        "Les faltes de puntualitat injustificades",
        "Les faltes d'assistència injustificades",
        "Els actes que alteren el normal desenvolupament de les activitats del centre educatiu, especialment els que alteren el normal desenvolupament de les classes.",
        "Els acts d'indisciplina.",
        "Els actes d'incorreció o desconsideració, les injuries i les ofenses contra els membres de la comunitat educativa.",
        "El furt o deteriorament intencionat d'inmobles, materíals, documentació o recursos del centre.",
        "El furt o deteriorament intencionat dels béns o materials dels membres de la comunitat educativa.",
        "Les accions que puguen ser perjudicials per a la integritat i la salut dels membres de la comunitat educativa.",
        "La negativa sistemàtica a portal el material necessari per al desenvolupament del procés d'ensenyament-aprenetage.",
        "La negativa a translladar la informació facilitada als pares, mares, tutors, o tutotes per part del centre i viceversa.",
        "L'alteració o manipulació de la documentació facilitada als pares, mares, tutors o tutores per part del centre.",
        "La suplantació de la personalitat dels embres de la comunitat escolar.",
        "La utilizació inadecuada de les tecnologies de la informació i comunicació durant les activitats que es realitzen en centre educatiu.",
        "L'ús de telèfons mòbils, aparells de so i altres aparells electrònics aliens al procès al procés d'ensenyament-aprenentage. Duran les activitats que es realitzen en el centre educatiu.",
        "Els actes que dificulten o impedisquen una falte contrària a les normes de convivència.",
        "La negativa al compliment de les mesures correctores adoptades davant de conductes contráries a les normes de convivéncia.",
        "L'és inadequat de les infraestructures i béns o equips materials del centre.",
        "La desobediéncia en el compliment de les normes de carácter propi del centre i que estiguen incloses en el seu projecte educatiu."
    ];
}

/* Tipificacion Grave */
function tipiGrave() {
    return array[
        "Els actes greus d'indisciplina i les injures i ofenses contra membres de la comunitat educativa que sobrepassen la incorreció o la desconsideració previstes en el article 35.",
        "L'agressió fisca o moral, les amenaces i coaccions i la discriminació greu a quaselvol membre de la comunitat educativa, aixi com la falta de respecte greu a la integritat i la dignitat personal.",
        "Les vexacions i humiliacions a quasevol membre de la comunitat scolar, particularment si tenen un comportament sexista o xenòfon, aixi com les que es realitzen contra els membres més vulnerables per les seues caracteristiques personals, socials o educatives.",
        "L'assetjament escolar.",
        "La suplantació de personalitat en actes de la vida docent.",
        "La falsificació, el deteroprament o la sustracció de documentació acadèmica.",
        "Els danys greus causats en els locals, materials o documents del centre ens els béns dels membres de la comunitat educativa.",
        "Els actes injustificans que pertorben greument el normal desenvolupament de les activitas del centre.",
        "Les actuacios que puguen perjudicar greument la salut i la integritat personals dels menbres de la comunitat educativa.",
        "La introducció en el centre d'objectes perillosos o substàncies perjudicials per a la salut i la integritat personal dels membres de la comunitat educativa.",
        "Les conductes tipificades com a contràries a les normes de convivència del centre educatiu si concorren circumstàncies del col·lectivitat o publicitat intencionada per qualsevol mitjà.",
        "La negativa reiterada al compliment de les mesures educatives correctores adoptades davant de contuctes contràries a les normes de convivència.",
        "La negatica reiterada al compliment de les mesures disciplinàries adoptades davant de faltes que afecten greument a la convivència en el centre.",
        "L'accés indegut sense autorització a fitxers i servidors del centre.",
        "Actes atempratoris respecte al projecte educatiu, aixi com al cácter propi del centre."
    ];
}