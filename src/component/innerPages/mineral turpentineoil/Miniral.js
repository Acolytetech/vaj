import React from 'react';
import miniral from '../../../image/innerImage/Mineral Turpentine Oil 1.jpg'
import miniral2 from '../../../image/innerImage/Mineral Turpentine Oil 2.jpg'
import miniral3 from '../../../image/innerImage/Mineral Turpentine Oil 3.jpg'


const Miniral = () => {
    return (
        <div className="container mx-auto p-4 productpage">
            <img
                src={miniral}
                alt="Sub 2"
                className="object-cover w-full h-full rounded-lg productpage"
            />
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">

                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-4">Mineral Turpentine Oil</h1>
                    <p className="text-gray-700 mb-4">
                    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> UComposition: </span>  Primarily composed of aliphatic hydrocarbons.    </li>
        <li><span className='font-bold'> Appearance:</span>  Clear, colorless liquid.     </li>
        <li><span className='font-bold'>Boiling Range:</span>  Typically between 140°C and 200°C.    </li>
        <li><span className='font-bold'> Solubility:</span> Insoluble in water but soluble in organic solvents.   </li>

        <li><span className='font-bold'> Odor: </span>Characteristic mild odor.     </li>
        <li><span className='font-bold'> Flammability:</span> Flammable with a flash point around 31°C (87.8°F).      </li>
        <li><span className='font-bold'> Toxicity:</span> Can cause irritation and dizziness upon prolonged exposure.      </li>
        
    </ol>
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
                    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>  Cleaning Agent: </span>  Effective in cleaning and degreasing applications.     </li>
        <li><span className='font-bold'> Solvent:</span>  Used in the formulation of various industrial solvents.   </li>
        <li><span className='font-bold'>Polish and Waxes:</span>   Component in furniture polish and waxes.    </li>
        <li><span className='font-bold'> Printing Ink:</span>  Utilized in the printing industry for ink formulation.    </li>

        
    </ol>
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

