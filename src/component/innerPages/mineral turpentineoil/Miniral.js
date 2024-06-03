import React from 'react';
import miniral from '../../../image/innerImage/Mineral Turpentine Oil 1.jpg'
import miniral2 from '../../../image/innerImage/Mineral Turpentine Oil 2.jpg'
import miniral3 from '../../../image/innerImage/Mineral Turpentine Oil 3.jpg'


const Miniral = () => {
    return (
        <div className="container mx-auto p-4">
            <img
                src={miniral}
                alt="Sub 2"
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">

                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Mineral Turpentine Oil</h2>
                    <p className="text-gray-700 mb-4">
                    Spirit of turpentine, or just plain turpentine, is another name for the liquid that is produced by distilling resin that is collected from live trees, mostly pines. The oil has a distinct smell and is made up of terpenes, primarily alpha- and beta-pinene. Owing to its medicinal effects and solvent characteristics, it has been utilized for millennia in a variety of applications.
                    <p>
                    Turpentine is useful in many industrial applications because it works well as a solvent for oils, resins, and waxes.
                    <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Aromatic:</h1> It has a strong, unique smell, which is both a quality and a useful attribute in some situations.
Turpentine oil evaporates fast at room temperature due to its high volatility.
<h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Flammable:</h1> Turpentine needs to be handled carefully since it is extremely flammable due to its volatile nature.
                    </p>
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
                    Turpentine is frequently used as a paint thinner and solvent for oil-based paints, varnishes, and lacquers. It facilitates component dissolution and mixing, enhancing finish and application.

                    <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Cleaning Agent:</h1> Turpentine works well as a solvent to clean brushes, rollers, and other painting equipment. Tar and adhesive residues are also removed using it.

                    <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Applications in Medicine:</h1> Turpentine oil has long been used, albeit sparingly, to treat a variety of illnesses. It was once used to cure ailments including rheumatism and muscular soreness. Because of its antibacterial and anti-inflammatory qualities, it has been administered topically. However, because safer substitutes are now available, its usage in contemporary medicine has decreased.

Aromatherapy and Fragrances: Turpentine oil is occasionally utilized in
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
        <img
            src={miniral2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={miniral3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
    );
};

export default Miniral;

