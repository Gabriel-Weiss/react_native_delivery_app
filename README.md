> React Native application modeling a food delivery app.

- react-native-maps
- react-navigation
- react-redux
- tailwindcss
- firebase

> Create a `.env` file in the root directory

- `FIREBASE_API_KEY`=_your firebase credentials_
- `FIREBASE_AUTH_DOMAIN`=_your firebase credentials_
- `FIREBASE_PROJECT_ID`=_your firebase credentials_
- `FIREBASE_STORAGE_BUCKET`=_your firebase credentials_
- `FIREBASE_MESSAGING_SENDER_ID`=_your firebase credentials_
- `FIREBASE_APP_ID`=_your firebase credentials_

> Firestore schema:

- categories:
  - "image": string,
  - "name": string
- restaurants:
  - "address": string,
  - "category": string,
  - "description": string,
  - "image": string,
  - "location": geopoint,
  - "rating": number,
  - "title": string,
  - "dishes": subcollection
    - description: string,
    - image: string,
    - price: number,
    - title: string

> Resulting screens

| Home                                                                                                                          | Restaurant                                                                                                                    | Cart                                                                                                                          | Order                                                                                                                         | Delivery                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/57287837/209697518-ef58a947-a510-40e1-abb9-d33b237e7c1a.png" width="400"> | <img src="https://user-images.githubusercontent.com/57287837/209697560-362e2502-b91f-4757-a424-a043d4787959.png" width="400"> | <img src="https://user-images.githubusercontent.com/57287837/209697674-56034829-ecb8-4d2f-bd75-91a99cf2d7d3.png" width="400"> | <img src="https://user-images.githubusercontent.com/57287837/209697702-df52df99-7310-4fd9-9b06-63d9b26b740c.png" width="400"> | <img src="https://user-images.githubusercontent.com/57287837/209697729-59db4859-e513-4d09-9e5d-7d498a7a17e1.png" width="400"> |
