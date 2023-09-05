import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"

      >
      Je suis un développeur web et ingénieur DevOps avec une expérience en JavaScript, Python et PHP, et une expertise dans des frameworks tels que React, Vue.js, Three.js, Node.js et Symfony. J'apprends vite et je collabore étroitement avec mes clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes concrets. Travaillons ensemble pour donner vie à vos idées !

      </motion.p>

    </>
  )
}

export default About