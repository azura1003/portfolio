import { SectionWrapper } from "../hoc";


const Footer = () => {
    return (
      <div className="bg-black-100 py-4 px-8 mt-12 rounded-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-white font-medium mb-4 md:mb-0">© 2023 ManoDev. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="/conditions" className="text-secondary hover:text-white transition">Conditions d'utilisation</a>
            <a href="/privacy" className="text-secondary hover:text-white transition">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    )
  }

  export default SectionWrapper(Footer, "");
  