import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';

import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Privacy = () => {
    return (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Manodev Privacy</p>
            <h2 className={styles.sectionHeadText}>Politiques de confidentialité</h2>
          </motion.div>
    
          <div
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
                
                Définitions
                <br/>
                <br/>
                    L’Éditeur : La personne, physique ou morale, qui édite les services de communication au public
                    en ligne.
                    Le Site : L’ensemble des sites, pages Internet et services en ligne proposés par l’Éditeur.
                    L’Utilisateur : La personne utilisant le Site et les services.
                    <br/>
                    <br/>
                    1- Nature des données collectées
                    Dans le cadre de l’utilisation des Sites, l’Éditeur est susceptible de collecter les catégories
                    de données suivantes concernant ses Utilisateurs :
                    Données d’état-civil, d’identité, d’identification…
                    <br/>
                    <br/>
                    2- Communication des données personnelles à des tiers
                    <br/>
                    <br/>
                    Pas de communication à des tiers
                    <br/>
                    <br/>
                    Vos données ne font l’objet d’aucune communication à des tiers. Vous êtes toutefois informés
                    qu’elles pourront être divulguées en application d’une loi, d’un règlement ou en vertu d’une
                    décision d’une autorité réglementaire ou judiciaire compétente.
                    <br/>
                    <br/>
                    3- Information préalable pour la communication des
                    données personnelles à des tiers en cas de fusion /
                    absorption
                    Information préalable et possibilité d’opt-out avant et après la fusion / acquisition.
                    <br/>
                    <br/>
                    Dans le cas où nous prendrions part à une opération de fusion, d’acquisition ou à toute autre
                    forme de cession d’actifs, nous nous engageons à garantir la confidentialité de vos données
                    personnelles et à vous informer avant que celles-ci ne soient transférées ou soumises à de
                    nouvelles règles de confidentialité.
                    <br/>
                    <br/>
                    4- Agrégation des données
                    Agrégation avec des données non personnelles
                    <br/>
                    <br/>
                    Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à
                    tous nos Utilisateurs ou à des groupes ou catégories spécifiques d’Utilisateurs que nous
                    combinons de manière à ce qu’un Utilisateur individuel ne puisse plus être identifié ou
                    mentionné) et les informations non personnelles à des fins d’analyse du secteur et du marché,
                    de profilage démographique, à des fins promotionnelles et publicitaires et à d’autres fins
                    commerciales.
                    <br/>
                    <br/>
                    Agrégation avec des données personnelles disponibles sur les comptes sociaux de
                    l’Utilisateur
                    <br/>
                    <br/>
                    Si vous connectez votre compte à un compte d’un autre service afin de faire des envois croisés,
                    ledit service pourra nous communiquer vos informations de profil, de connexion, ainsi que toute
                    autre information dont vous avez autorisé la divulgation. Nous pouvons agréger les informations
                    relatives à tous nos autres Utilisateurs, groupes, comptes, aux données personnelles disponibles
                    sur l’Utilisateur.
                    <br/>
                    <br/>
                    5- Collecte des données d’identité
                    Consultation libre
                    <br/>
                    <br/>
                    La consultation du Site ne nécessite pas d’inscription ni d’identification préalable. Elle peut
                    s’effectuer sans que vous ne communiquiez de données nominatives vous concernant (nom,
                    prénom, adresse, etc). Nous ne procédons à aucun enregistrement de données nominatives
                    pour la simple consultation du Site.
                    <br/>
                    <br/>
                    6- Collecte des données du terminal
                    Aucune collecte des données techniques.
                    <br/>
                    <br/>
                    Nous ne collectons et ne conservons aucune donnée technique de votre appareil (adresse IP,
                    fournisseur d’accès à Internet…).
                    <br/>
                    <br/>
                    7- Cookies
                    Durée de conservation des cookies
                    <br/>
                    <br/>
                    Conformément aux recommandations de la CNIL, la durée maximale de conservation des
                    cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l’Utilisateur,
                    tout comme la durée de la validité du consentement de l’Utilisateur à l’utilisation de ces cookies.
                    La durée de vie des cookies n’est pas prolongée à chaque visite. Le consentement de
                    l’Utilisateur devra donc être renouvelé à l’issue de ce délai.
                    <br/>
                    <br/>
                    Finalité cookies
                    <br/>
                    <br/>
                    Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les
                    services rendus à l’Utilisateur, à partir du traitement des informations concernant la fréquence
                    d’accès, la personnalisation des pages ainsi que les opérations réalisées et les informations
                    consultées.
                    Vous êtes informé que l’Éditeur est susceptible de déposer des cookies sur votre terminal. Le
                    cookie enregistre des informations relatives à la navigation sur le service (les pages que vous
                    avez consultées, la date et l’heure de la consultation…) que nous pourrons lire lors de vos visites
                    ultérieures.
                    <br/>
                    <br/>
                    Opt-in pour le dépôt de cookies
                    <br/>
                    <br/>
                    Nous n’utilisons pas de cookies. Si nous devions en utiliser à l’avenir, vous en seriez informé
                    préalablement et auriez la possibilité de désactiver ces cookies.
                    <br/>
                    <br/>
                    8 – Conservation des données techniques
                    Durée de conservation des données techniques
                    <br/>
                    <br/>
                    Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation
                    des finalités visées ci-avant.
                    <br/>
                    <br/>
                    9- Délai de conservation des données
                    personnelles
                    Conservation des données pendant la durée de la relation contractuelle
                    Conformément à l’article 6-5° de la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux
                    fichiers et aux libertés, les données à caractère personnel faisant l’objet d’un traitement ne sont
                    pas conservées au-delà du temps nécessaire à l’exécution des obligations définies lors de la
                    conclusion du contrat ou de la durée prédéfinie de la relation contractuelle.
                    <br/>
                    <br/>
                    Conservation des données renseignées lors d’une demande via le formulaire de contact
                    3 ans à compter de la demande
                    <br/>
                    <br/>
                    10- Indications en cas de faille de sécurité décelée
                    par l’Éditeur
                    Information de l’Utilisateur en cas de faille de sécurité
                    <br/>
                    <br/>
                    Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles
                    appropriées afin de garantir un niveau de sécurité adapté au regard des risques d’accès
                    accidentels, non autorisés ou illégaux, de divulgation, d’altération, de perte ou encore de
                    destruction des données personnelles vous concernant. Dans l’éventualité où nous prendrions
                    connaissance d’un accès illégal aux données personnelles vous concernant stockées sur nos
                    serveurs ou ceux de nos prestataires, ou d’un accès non autorisé ayant pour conséquence la
                    réalisation des risques identifiés ci-dessus, nous nous engageons à :
                    <br/>
                    <br/>
                    Vous notifier l’incident dans les plus brefs délais
                    Examiner les causes de l’incident et vous en informer ;
                    Prendre les mesures nécessaires dans la limite du raisonnable afin d’amoindrir les effets négatifs
                    et préjudices pouvant résulter dudit incident.
                    <br/>
                    <br/>
                    Limitation de la responsabilité
                    <br/>
                    <br/>
                    En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille
                    de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de
                    responsabilité quant à la survenance de l’incident en question.
                    <br/>
                    <br/>
                    11- Transfert des données personnelles à l’étranger
                    Pas de transfert en dehors de l’Union européenne
                    <br/>
                    <br/>
                    L’Éditeur s’engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors
                    de l’Union européenne.
                    <br/>
                    <br/>
                    12- Modification de la politique de confidentialité
                    En cas de modification de la présente Politique de Confidentialité, engagement de ne pas
                    baisser le niveau de confidentialité de manière substantielle sans l’information préalable
                    des personnes concernées.
                    Nous nous engageons à vous informer en cas de modification substantielle de la présente
                    Politique de Confidentialité, et à ne pas baisser le niveau de confidentialité de vos données de
                    manière substantielle sans vous en informer et obtenir votre consentement.
                    <br/>
                    <br/>
                    13- Droit applicable et modalités de recours
                    Application du droit français (législation CNIL) et compétence des tribunaux
                    <br/>
                    <br/>
                    La présente Politique de Confidentialité et votre utilisation du Site sont régies et interprétées
                    conformément aux lois de France, et notamment à la Loi n° 78-17 du 6 janvier 1978 relative à
                    l’informatique, aux fichiers et aux libertés. Le choix de la loi applicable ne porte pas atteinte à vos
                    droits en tant que consommateur conformément à la loi applicable de votre lieu de résidence. Si
                    vous êtes un consommateur, vous et nous acceptons de se soumettre à la compétence non exclusive des juridictions françaises, ce qui signifie que vous pouvez engager une action relative
                    à la présente Politique de Confidentialité en France ou dans le pays de l’UE dans lequel vous
                    vivez. Si vous êtes un professionnel, toutes les actions à notre encontre doivent être engagées
                    devant une juridiction en France.
                    En cas de litige, les parties chercheront une solution amiable avant toute action judiciaire. En cas
                    d’échec de ces tentatives, toutes contestations à la validité, l’interprétation et / ou l’exécution de
                    la Politique de Confidentialité devront être portées même en cas de pluralité des défendeurs ou
                    d’appel en garantie, devant les tribunaux français.
                    <br/>
                    <br/>
                    16- Portabilité des données
                    Portabilité des données
                    <br/>
                    <br/>
                    L’Éditeur s’engage à vous offrir la possibilité de vous faire restituer l’ensemble des données
                    vous concernant sur simple demande. L’Utilisateur se voit ainsi garantir une meilleure
                    maîtrise de ses données, et garde la possibilité de les réutiliser. Ces données devront être
                    fournies dans un format ouvert et aisément réutilisable.
                    <br/>
                    <br/>
                    17 – Me contacter
                    <br/>
                    <br/>
                    Pour toute question relative à la présente Politique de Confidentialité, veuillez me contacter via contact@manodev.com
                
          </div>
          
        
          
    
        </>
      )
    
}

export default SectionWrapper (Privacy, "");