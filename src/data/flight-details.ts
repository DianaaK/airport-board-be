export interface Airport {
  code: string;
  city: string;
  name: string;
  latitude: number;
  longitude: number;
}

export const origin: Airport = {
  code: 'CLJ',
  city: 'Cluj-Napoca',
  name: 'Avram Iancu Intl.',
  latitude: 46.7852,
  longitude: 23.6862,
};

// Static demo data, not live schedules or aircraft assignments.
const destinations: [string, string, string, string, number, number, number][] =
  [
    [
      'London Heathrow',
      'LHR',
      'London',
      'Heathrow Airport',
      51.47,
      -0.4543,
      210,
    ],
    ['Munich', 'MUC', 'Munich', 'Munich Airport', 48.3538, 11.7861, 125],
    [
      'Milan Malpensa',
      'MXP',
      'Milan',
      'Malpensa Airport',
      45.6306,
      8.7281,
      145,
    ],
    ['Istanbul', 'IST', 'Istanbul', 'Istanbul Airport', 41.2753, 28.7519, 80],
    [
      'Paris Charles de Gaulle',
      'CDG',
      'Paris',
      'Charles de Gaulle Airport',
      49.0097,
      2.5479,
      190,
    ],
    ['Amsterdam', 'AMS', 'Amsterdam', 'Schiphol Airport', 52.3105, 4.7683, 185],
    ['Vienna', 'VIE', 'Vienna', 'Vienna Intl.', 48.1103, 16.5697, 100],
    ['Zurich', 'ZRH', 'Zurich', 'Zurich Airport', 47.4581, 8.5555, 145],
    [
      'Rome Fiumicino',
      'FCO',
      'Rome',
      'Leonardo da Vinci Airport',
      41.8003,
      12.2389,
      130,
    ],
    ['Warsaw', 'WAW', 'Warsaw', 'Chopin Airport', 52.1657, 20.9671, 110],
    ['Athens', 'ATH', 'Athens', 'Athens Intl.', 37.9364, 23.9445, 95],
    [
      'Belgrade',
      'BEG',
      'Belgrade',
      'Nikola Tesla Airport',
      44.8184,
      20.3091,
      75,
    ],
    ['Dubai', 'DXB', 'Dubai', 'Dubai Intl.', 25.2532, 55.3657, 300],
    ['Doha', 'DOH', 'Doha', 'Hamad Intl.', 25.2731, 51.6081, 280],
    ['Barcelona', 'BCN', 'Barcelona', 'El Prat Airport', 41.2974, 2.0833, 190],
    [
      'Bucharest',
      'OTP',
      'Bucharest',
      'Henri Coandă Intl.',
      44.5711,
      26.085,
      55,
    ],
    [
      'Frankfurt',
      'FRA',
      'Frankfurt',
      'Frankfurt Airport',
      50.0379,
      8.5622,
      150,
    ],
    [
      'Brussels Charleroi',
      'CRL',
      'Charleroi',
      'Brussels South Charleroi Airport',
      50.4592,
      4.4538,
      175,
    ],
    [
      'Madrid',
      'MAD',
      'Madrid',
      'Adolfo Suárez Madrid–Barajas Airport',
      40.4983,
      -3.5676,
      240,
    ],
    [
      'Timisoara',
      'TSR',
      'Timișoara',
      'Traian Vuia Intl.',
      45.8099,
      21.3379,
      60,
    ],
    [
      'Lisbon',
      'LIS',
      'Lisbon',
      'Humberto Delgado Airport',
      38.7742,
      -9.1342,
      280,
    ],
    ['Dublin', 'DUB', 'Dublin', 'Dublin Airport', 53.4213, -6.2701, 250],
    [
      'Copenhagen',
      'CPH',
      'Copenhagen',
      'Copenhagen Airport',
      55.6181,
      12.6561,
      160,
    ],
    ['Helsinki', 'HEL', 'Helsinki', 'Helsinki Airport', 60.3172, 24.9633, 170],
  ];

export const destinationDetails: Record<
  string,
  { airport: Airport; duration_minutes: number }
> = Object.fromEntries(
  destinations.map(
    ([
      destination,
      code,
      city,
      name,
      latitude,
      longitude,
      duration_minutes,
    ]) => [
      destination,
      { airport: { code, city, name, latitude, longitude }, duration_minutes },
    ],
  ),
);

export const aircraftDetails: Record<
  string,
  { aircraft: string; registration: string }
> = {
  TAROM: { aircraft: 'Boeing 737-800', registration: 'YR-BGL' },
  Lufthansa: { aircraft: 'Airbus A320', registration: 'D-AIUA' },
  'Wizz Air': { aircraft: 'Airbus A321', registration: 'HA-LZX' },
  'Turkish Airlines': { aircraft: 'Airbus A321', registration: 'TC-JRA' },
  'Air France': { aircraft: 'Airbus A320', registration: 'F-GKXA' },
  KLM: { aircraft: 'Boeing 737-800', registration: 'PH-BXA' },
  'Austrian Airlines': { aircraft: 'Airbus A320', registration: 'OE-LBA' },
  Swiss: { aircraft: 'Airbus A220-300', registration: 'HB-JCA' },
  Ryanair: { aircraft: 'Boeing 737-800', registration: 'EI-DCL' },
  'British Airways': { aircraft: 'Airbus A320', registration: 'G-EUUA' },
  'LOT Polish Airlines': { aircraft: 'Embraer 195', registration: 'SP-LNA' },
  'Aegean Airlines': { aircraft: 'Airbus A320', registration: 'SX-DGA' },
  'Air Serbia': { aircraft: 'Airbus A319', registration: 'YU-APC' },
  flydubai: { aircraft: 'Boeing 737-800', registration: 'A6-FDA' },
  'Qatar Airways': { aircraft: 'Airbus A320', registration: 'A7-AHA' },
  'Scandinavian Airlines': {
    aircraft: 'Airbus A320neo',
    registration: 'SE-ROA',
  },
  Finnair: { aircraft: 'Airbus A320', registration: 'OH-LXA' },
};
