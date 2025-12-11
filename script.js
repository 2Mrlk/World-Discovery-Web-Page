document.addEventListener('DOMContentLoaded', function() {

  const continentInfo = {
    'north-america': {
      continent: 'América do Norte',
      river: 'Rio Mississippi',
      mountain: 'Denali',
      landmarks: 'Grand Canyon, Estátua da Liberdade, Cataratas do Niágara'
    },
    'south-america': {
      continent: 'América do Sul',
      river: 'Rio Amazonas',
      mountain: 'Aconcágua',
      landmarks: 'Machu Picchu, Ilhas Galápagos'
    },
    'europe': {
      continent: 'Europa',
      river: 'Rio Danúbio',
      mountain: 'Mont Blanc',
      landmarks: 'Torre Eiffel, Coliseu, Acrópole de Atenas'
    },
    'africa': {
      continent: 'África',
      river: 'Rio Nilo',
      mountain: 'Monte Kilimanjaro',
      landmarks: 'Esfinge, Montanha da Mesa'
    },
    'asia': {
      continent: 'Ásia',
      river: 'Rio Yangtzé',
      mountain: 'Monte Everest',
      landmarks: 'Grande Muralha da China, Petra'
    },
    'australia-and-oceania': {
      continent: 'Austrália e Oceania',
      river: 'Rio Murray',
      mountain: 'Monte Kosciuszko',
      landmarks: 'Ópera de Sydney, Grande Barreira de Corais, Uluru'
    }
  };

  function displayContinentInfo(continentId) {
    const info = continentInfo[continentId];
    if (info) {
      alert(
        `Continente: ${info.continent}\n` +
        `Rio: ${info.river}\n` +
        `Montanha: ${info.mountain}\n` +
        `Pontos turísticos: ${info.landmarks}`
      );
    } else {
      alert('Informações não disponíveis');
    }
  }

  document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function() {
      displayContinentInfo(this.id);
    });
  });

  document.getElementById('discoverLocation').addEventListener('click', () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const continentId = determineContinentByGeo(position.coords.latitude, position.coords.longitude);
        displayContinentInfo(continentId);
      });
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }
  });

  function determineContinentByGeo(latitude, longitude) {
    if (latitude > 35 && longitude > -10 && longitude < 40) return 'europe';
    if (latitude < 0 && longitude > -80 && longitude < -34) return 'south-america';
    if (latitude > 0 && longitude > -130 && longitude < -70) return 'north-america';
    if (latitude > 5 && latitude < 60 && longitude > 40 && longitude < 180) return 'asia';
    if (latitude > -35 && latitude < 35 && longitude > 10 && longitude < 50) return 'africa';
    if (latitude < -10 && longitude > 110 && longitude < 180) return 'australia-and-oceania';

    return null;
  }

});
