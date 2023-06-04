// pages/api/dvla.js

const apiKey = process.env.DVLA_API_KEY;

export default async function handler(req, res) {
    const { registrationNumber } = req.query;
  
    try {
      const response = await fetch(
        'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
          body: JSON.stringify({ registrationNumber }),
        }
      );
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  