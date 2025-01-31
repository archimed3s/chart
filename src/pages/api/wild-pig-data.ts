import {NextApiRequest, NextApiResponse} from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Content-Type', 'application/json');
	res.statusCode = 200;
	res.end(JSON.stringify({
			'PIG POPULATIONS': [
				{
					'year': 2000,
					'island': 'Hawaii',
					'pigPopulation': 5260
				},
				{
					'year': 2000,
					'island': 'Maui',
					'pigPopulation': 1250
				},
				{
					'year': 2000,
					'island': 'Oahu',
					'pigPopulation': 11900
				},
				{
					'year': 2000,
					'island': 'Kauai',
					'pigPopulation': 490
				},
				{
					'year': 2000,
					'island': 'Molokai',
					'pigPopulation': 1200
				},
				{
					'year': 2000,
					'island': 'Lanai',
					'pigPopulation': 590
				},
				{
					'year': 2000,
					'island': 'Niihau',
					'pigPopulation': 40
				},
				{
					'year': 2000,
					'island': 'Kahoolawe',
					'pigPopulation': 790
				},
				{
					'year': 2001,
					'island': 'Hawaii',
					'pigPopulation': 14225
				},
				{
					'year': 2001,
					'island': 'Maui',
					'pigPopulation': 5690
				},
				{
					'year': 2001,
					'island': 'Oahu',
					'pigPopulation': 13440
				},
				{
					'year': 2001,
					'island': 'Kauai',
					'pigPopulation': 1700
				},
				{
					'year': 2001,
					'island': 'Molokai',
					'pigPopulation': 3890
				},
				{
					'year': 2001,
					'island': 'Lanai',
					'pigPopulation': 620
				},
				{
					'year': 2001,
					'island': 'Niihau',
					'pigPopulation': 50
				},
				{
					'year': 2001,
					'island': 'Kahoolawe',
					'pigPopulation': 560
				},
				{
					'year': 2002,
					'island': 'Hawaii',
					'pigPopulation': 9310
				},
				{
					'year': 2002,
					'island': 'Maui',
					'pigPopulation': 4360
				},
				{
					'year': 2002,
					'island': 'Oahu',
					'pigPopulation': 6780
				},
				{
					'year': 2002,
					'island': 'Kauai',
					'pigPopulation': 1060
				},
				{
					'year': 2002,
					'island': 'Molokai',
					'pigPopulation': 2980
				},
				{
					'year': 2002,
					'island': 'Lanai',
					'pigPopulation': 120
				},
				{
					'year': 2002,
					'island': 'Niihau',
					'pigPopulation': 20
				},
				{
					'year': 2002,
					'island': 'Kahoolawe',
					'pigPopulation': 870
				},
				{
					'year': 2003,
					'island': 'Hawaii',
					'pigPopulation': 6900
				},
				{
					'year': 2003,
					'island': 'Maui',
					'pigPopulation': 3450
				},
				{
					'year': 2003,
					'island': 'Oahu',
					'pigPopulation': 8240
				},
				{
					'year': 2003,
					'island': 'Kauai',
					'pigPopulation': 1022
				},
				{
					'year': 2003,
					'island': 'Molokai',
					'pigPopulation': 3350
				},
				{
					'year': 2003,
					'island': 'Lanai',
					'pigPopulation': 130
				},
				{
					'year': 2003,
					'island': 'Niihau',
					'pigPopulation': 30
				},
				{
					'year': 2003,
					'island': 'Kahoolawe',
					'pigPopulation': 510
				},
				{
					'year': 2004,
					'island': 'Hawaii',
					'pigPopulation': 7880
				},
				{
					'year': 2004,
					'island': 'Maui',
					'pigPopulation': 2600
				},
				{
					'year': 2004,
					'island': 'Oahu',
					'pigPopulation': 2800
				},
				{
					'year': 2004,
					'island': 'Kauai',
					'pigPopulation': 1000
				},
				{
					'year': 2004,
					'island': 'Molokai',
					'pigPopulation': 2810
				},
				{
					'year': 2004,
					'island': 'Lanai',
					'pigPopulation': 420
				},
				{
					'year': 2004,
					'island': 'Niihau',
					'pigPopulation': 60
				},
				{
					'year': 2004,
					'island': 'Kahoolawe',
					'pigPopulation': 380
				},
				{
					'year': 2005,
					'island': 'Hawaii',
					'pigPopulation': 3590
				},
				{
					'year': 2005,
					'island': 'Maui',
					'pigPopulation': 2770
				},
				{
					'year': 2005,
					'island': 'Oahu',
					'pigPopulation': 2040
				},
				{
					'year': 2005,
					'island': 'Kauai',
					'pigPopulation': 590
				},
				{
					'year': 2005,
					'island': 'Molokai',
					'pigPopulation': 3140
				},
				{
					'year': 2005,
					'island': 'Lanai',
					'pigPopulation': 190
				},
				{
					'year': 2005,
					'island': 'Niihau',
					'pigPopulation': 40
				},
				{
					'year': 2005,
					'island': 'Kahoolawe',
					'pigPopulation': 420
				}
			]
		}
	));
}
