import React, { useState } from 'react';

// Componente para palabras compuestas
const WordBreakdown = ({ animal, onBack, onStoryClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            ⬅️
          </button>
          <h1 className="text-xl font-bold text-gray-800">XOLINGO</h1>
          <div className="w-9"></div>
        </div>

        {/* Imagen del animal */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
            <span className="text-4xl">{animal.emoji}</span>
          </div>
        </div>

        {/* Palabra principal */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{animal.nahuatl}</h2>
          <p className="text-lg text-gray-600">{animal.spanish}</p>
        </div>

        {/* Desglose de la palabra */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Desglose:</h3>
          <div className="space-y-4">
            {animal.breakdown.map((part, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-4">
                <button
                  onClick={() => onStoryClick(part.word)}
                  className="text-xl font-semibold text-orange-600 hover:text-orange-700 transition-colors block"
                >
                  {part.word}
                </button>
                <p className="text-gray-600">{part.meaning}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Traducción literal:</p>
            <p className="text-lg font-medium text-gray-800 italic">"{animal.literalTranslation}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para historias de palabras únicas
const Story = ({ word, story, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 p-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            ⬅️
          </button>
          <h1 className="text-xl font-bold text-gray-800">XOLINGO</h1>
          <div className="w-9"></div>
        </div>

        {/* Palabra principal */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{word}</h2>
        </div>

        {/* Historia */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">📚</span>
            Historia de la palabra
          </h3>
          <div className="prose prose-sm text-gray-700 leading-relaxed">
            {story.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal de lista
const AnimalList = ({ onAnimalSelect }) => {
  const animals = [
    {
      id: 'guajolote',
      emoji: '🦃',
      spanish: 'Guajolote',
      nahuatl: 'Huexolotl',
      breakdown: [
        { word: 'Huehue', meaning: 'Viejo' },
        { word: 'Xolotl', meaning: 'Monstruo' }
      ],
      literalTranslation: 'Viejo Monstruo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 p-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">XOLINGO</h1>
          <p className="text-gray-600">Explora palabras en náhuatl</p>
        </div>

        {/* Lista de animales */}
        <div className="space-y-4">
          {animals.map((animal) => (
            <button
              key={animal.id}
              onClick={() => onAnimalSelect(animal)}
              className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{animal.emoji}</div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-gray-800">{animal.nahuatl}</h3>
                  <p className="text-gray-600">{animal.spanish}</p>
                </div>
                <div className="text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Descubre la riqueza del náhuatl 🌺
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente principal de la aplicación
const XolingoApp = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  // Historias para palabras únicas
  const stories = {
    'Xolotl': `Xólotl era el dios azteca de la muerte y del inframundo, hermano gemelo de Quetzalcóatl. 

Se le representaba como un perro sin pelo, el xoloitzcuintli, que guiaba las almas de los muertos en su viaje al Mictlán.

La palabra "xólotl" también significa "monstruo" o "cosa extraña", refiriéndose a su aspecto único y su conexión con el mundo de los muertos.`,
    'Huehue': `"Huehue" significa "viejo" o "anciano" en náhuatl, pero también conlleva un sentido de respeto y sabiduría.

Los "huehues" eran los ancianos respetados de la comunidad, guardianes de la tradición y el conocimiento ancestral.

Esta palabra se usa para denotar no solo la edad, sino la veneración hacia aquellos que han acumulado experiencia y sabiduría a lo largo de los años.`
  };

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
    setCurrentView('breakdown');
  };

  const handleStoryClick = (word) => {
    setSelectedWord(word);
    setCurrentView('story');
  };

  const handleBack = () => {
    if (currentView === 'story') {
      setCurrentView('breakdown');
      setSelectedWord(null);
    } else {
      setCurrentView('list');
      setSelectedAnimal(null);
    }
  };

  return (
    <div className="font-sans">
      {currentView === 'list' && (
        <AnimalList onAnimalSelect={handleAnimalSelect} />
      )}
      
      {currentView === 'breakdown' && selectedAnimal && (
        <WordBreakdown 
          animal={selectedAnimal}
          onBack={handleBack}
          onStoryClick={handleStoryClick}
        />
      )}
      
      {currentView === 'story' && selectedWord && (
        <Story 
          word={selectedWord}
          story={stories[selectedWord]}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default XolingoApp;