export type Dams = 
    | 'IDUKKI'
    | 'IDAMALAYAR'
    | 'KAKKI_ANATHODE'
    | 'BANASURASAGAR(K A SCHEME)'
    | 'SHOLAYAR'
    | 'MADUPETTY'
    | 'ANAYIRANKAL'
    | 'PONMUDI'
    | 'KUTTIYADI_KAKKAYAM'
    | 'PAMBA'
    | 'PORINGALKUTHU'
    | 'KUNDALA'
    | 'KALLARKUTTY'
    | 'ERATTAYAR'
    | 'LOWER_PERIYAR'
    | 'MOOZHIYAR'
    | 'KALLAR'
    | 'SENGULAM_PUMPING_STORAGE_DAM';

interface Coordinate {
      lat: number;
      lon: number;
  }

export const DAM_COORDINATES: Record<Dams, Coordinate> = {
    'IDUKKI': { lat: 9.8436, lon: 76.9762 },
    'IDAMALAYAR': { lat: 10.221867602366947, lon: 76.70603684268934 },
    'KAKKI_ANATHODE': { lat: 9.341667, lon: 77.15 },
    'BANASURASAGAR(K A SCHEME)': { lat: 11.6709, lon: 75.9504 },
    'SHOLAYAR': { lat: 10.3178, lon: 76.7342 },
    'MADUPETTY': { lat: 10.1063, lon: 77.1238 },
    'ANAYIRANKAL': { lat: 10.009515341318457, lon: 77.20724298186308 },
    'PONMUDI': { lat: 9.9604, lon: 77.0565 },
    'KUTTIYADI_KAKKAYAM': { lat: 11.551, lon: 75.925 },
    'PAMBA': { lat: 9.3906, lon: 77.1598 },
    'PORINGALKUTHU': { lat: 10.3152, lon: 76.6344 },
    'KUNDALA': { lat: 10.14358754366575, lon: 77.19868256414041 },
    'KALLARKUTTY': { lat: 9.98, lon: 77.001389 },
    'ERATTAYAR': { lat: 9.8103, lon: 77.106 },
    'LOWER_PERIYAR': { lat: 9.9620, lon: 76.9568 },
    'MOOZHIYAR': { lat: 9.308, lon: 77.0656 },
    'KALLAR': { lat: 9.8255, lon: 77.1562 },
    'SENGULAM_PUMPING_STORAGE_DAM': { lat: 10.010833, lon: 77.0325 },
  };


export const DAM_NAMES:  Record<Dams, string> = {
    'IDUKKI': 'Idukki',
    'IDAMALAYAR': 'Idamalayar',
    'KAKKI_ANATHODE': 'Anathode',
    'BANASURASAGAR(K A SCHEME)': 'Banasura Sagar',
    'SHOLAYAR': 'Sholayar',
    'MADUPETTY': 'Mattupetty',
    'ANAYIRANKAL': 'Anayirankal',
    'PONMUDI': 'Ponmudi',
    'KUTTIYADI_KAKKAYAM': 'Kakkayam',
    'PAMBA': 'Pamba',
    'PORINGALKUTHU': 'Poringalkuthu',
    'KUNDALA': 'Kundala',
    'KALLARKUTTY': 'Kallarkutty',
    'ERATTAYAR': 'Erattayar',
    'LOWER_PERIYAR': 'Pambla',
    'MOOZHIYAR': 'Moozhiyar',
    'KALLAR': 'Kallar',
    'SENGULAM_PUMPING_STORAGE_DAM': 'Chenkulam',
  };

